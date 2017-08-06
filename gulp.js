const gulp = require('gulp');
const gulpsync = require('gulp-sync')(gulp);
const clean = require('gulp-clean');
const install = require('gulp-install');
const builder = require('electron-builder');
const Platform = builder.Platform;
const webpack = require('webpack');
const fs = require('fs');
const url = require('url');
const webpackConfig = require("./webpack.config.js");
const OSS = require('ali-oss').Wrapper;

const client = new OSS({
    accessKeyId: 'MLaPoaRe9VOUqQgh',
    accessKeySecret: 'gRSpBmyKiwAUNPzE4bxcskvv67igHb',
    bucket: 'cassnotify',
    region: 'oss-cn-shenzhen'
});

const OSS_TIMEOUT = 30; // 分钟

// 需要发布的文件
const staticFiles = [
    'dist/**/*',
    'images/**/*'
];

// 删除dist, app文件夹
gulp.task('clean', function () {
    return gulp.src(['app', 'dist'], { read: false })
        .pipe(clean());
});

// 安装依赖
gulp.task('install', function () {
    return gulp.src('./app/package.json')
        .pipe(gulp.dest('./app'))
        .pipe(install({
            production: true,
            args: ['--registry=https://registry.npm.taobao.org']
        }));
});

// 复制文件
gulp.task('copy', function () {
    return gulp.src(staticFiles, { base: '.' }).pipe(gulp.dest('./app'));
});

// 从config/ 中获取配置文件, 更新到config.js
gulp.task('update-config', function () {
    let env = process.env.NODE_ENV || 'development';
    let defaultConfig = require('./config/default.json');
    let specialConfig = require(`./config/${env}.json`);

    let result = Object.assign({}, defaultConfig, specialConfig);
    result.env = env;

    // 刷新config.js
    console.log('更新config.js');
    let configData = 'module.exports = ' + JSON.stringify(result, null, 2) + ';';
    fs.writeFileSync('./config.js', configData);

    // 页面版本号
    console.log('修改页面显示版本号');
    let emptyScss = fs.readFileSync('./scss/_empty.scss', { encoding: 'utf8' });
    emptyScss = emptyScss.replace(/\n\s+content: '.*?';/g, `\n  content: '${result.version}';`);
    fs.writeFileSync('./scss/_empty.scss', emptyScss);

    console.log('修改package.json版本号');
    // 更新package.json版本号
    // 测试版本中间号为奇数，正式版本为偶数
    // V100R007C01 -> 1.14.1
    // V100R007B01 -> 1.13.1
    let re = /V(\d+)R(\d+)([BC])(\d+)/.exec(result.version);

    let packjson = require('./package.json');
    if (re) {
        let isTest = re[3] === 'B';
        let major = parseInt(re[1]) / 100;
        let mid = isTest ? parseInt(re[2]) * 2 - 1 : parseInt(re[2]) * 2;
        let small = parseInt(re[4]);
        packjson.version = `${major}.${mid}.${small}`;
        fs.writeFileSync('./package.json', JSON.stringify(packjson, null, 2));
    }

    console.log('将package.json 复制到app/');
    // 删除开发依赖
    delete packjson.devDependencies;
    delete packjson.build;
    try {
        fs.mkdirSync('app');
    } catch (e) {
        console.log('创建app目录失败', e.code);
    }
    fs.writeFileSync('./app/package.json', JSON.stringify(packjson, null, 2));
});

// webpack打包
gulp.task('webpack', function (done) {
    webpack(webpackConfig, function (err, status) {
        if (err) {
            console.error('webpack 打包失败', err);
        } else {
            console.log('webpack 打包成功', status);
        }
        done();
    });
});

// webpack -w
gulp.task('watch', ['update-config'], function () {
    webpack(Object.assign({}, webpackConfig, { watch: true }), function (err, status) {
        if (err) {
            console.error('webpack 打包失败', err);
        } else {
            console.log('webpack 打包成功', status);
        }
    });
});

// electron-builder 构建
gulp.task('build', function () {
    // Promise is returned
    console.log(Platform.WINDOWS.createTarget("ia32"));
    return builder.build({
        targets: Platform.WINDOWS.createTarget(["default"], builder.Arch.ia32),
        devMetadata: {
            // "//": "build and other properties, see https://goo.gl/5jVxoO"
        }
    });
});


gulp.task('upload', function () {
    let config = require('./config');
    let pack = require('./package.json');
    let urlObject = url.parse(config.feedUrl);

    let nupkg = `./dist/win-ia32/CassIM-${pack.version}-full.nupkg`;
    console.log(nupkg);
    let setup = `./dist/win-ia32/开思小马 Setup ${pack.version}-ia32.exe`;
    console.log(setup);
    console.log(urlObject);
    return client.putStream(`${urlObject.pathname}/CassIM-${pack.version}-full.nupkg`, fs.createReadStream(nupkg), {
        timeout: OSS_TIMEOUT * 60 * 1000
    })
        .then(result => {
            console.log(`上传${nupkg}成功`, result);
            return client.put(`${urlObject.pathname}/RELEASES`, './dist/win-ia32/RELEASES');
        })
        .then(result => {
            console.log(`上传RELEASES文件成功`, result);
            return client.putStream(`${urlObject.pathname}/开思小马 Setup.exe`, fs.createReadStream(setup), {
                timeout: OSS_TIMEOUT * 60 * 1000
            });
        })
        .then(result => console.log('上传Setup成功', result));
});

// 发布到OSS
gulp.task('release', gulpsync.sync(['clean', 'update-config', 'webpack', 'copy', 'install', 'build', 'upload']));