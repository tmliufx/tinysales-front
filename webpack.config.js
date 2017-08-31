const webpack = require('webpack');
const path = require('path');
const envConfig = require('config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src/'), // 设置原始文件目录;
    entry: {// 打包入口;
        app: 'app.js'
    },
    devtool: 'eval',
    output: { // 打包出口;
        publicPath: envConfig.get('website.host'), // 配合devServer本地Server;
        path: path.resolve(__dirname, './dist/'), // 出口地址;
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                // 需要排除的目录
                exclude: '/node_modules/',
                include: [path.resolve(__dirname, './src')],
                // 加载babel-loader转译es6
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                // 正则匹配后缀.css文件;
                test: /\.css$/,
                // 使用html-webpack-plugin插件独立css到一个文件;
                use: ExtractTextPlugin.extract({
                    // 加载css-loader、postcss-loader（编译顺序从下往上）转译css
                    use: [
                        {
                            loader: 'css-loader', options: {importLoaders: 1}
                        },
                        {
                            loader: 'postcss-loader',
                            // 配置参数;
                            options: {
                                // 从postcss插件autoprefixer 添加css3前缀;
                                plugins: function () {
                                    return [
                                        require('postcss-import')(),
                                        // 加载autoprefixer并配置前缀,可加载更多postcss插件;
                                        require('autoprefixer')({ browsers: ['last 5 versions'] })
                                    ];
                                }
                            }
                        }
                    ]
                })
            },
            {
                // 正则匹配后缀.less文件;
                test: /\.less$/,
                // 使用html-webpack-plugin插件独立css到一个文件;
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader?importLoaders=1'
                        },
                        {
                            loader: 'postcss-loader',
                            // 配置参数;
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')({
                                            browsers: ['ios >= 7.0']
                                        })
                                    ];
                                }
                            }
                        },
                        // 加载less-loader同时也得安装less;
                        'less-loader'
                    ]
                })
            },
            {
                // 正则匹配后缀.png、.jpg、.gif图片文件;
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        // 加载url-loader 同时安装 file-loader;
                        loader: 'url-loader',
                        options: {
                            // 小于10000K的图片文件转base64到css里,当然css文件体积更大;
                            limit: 10000,
                            // 设置最终img路径;
                            name: '/i/[name]-[hash].[ext]'
                        }
                    },
                    {
                        // 压缩图片(另一个压缩图片：image-webpack-loader);
                        loader: 'img-loader?minimize&optimizationLevel=5&progressive=true'
                    }
                ]
            }
        ]
    },
    plugins: [
        // 模板插件
        new HtmlWebpackPlugin({
            // 设置最后生成文件名称;
            filename: 'index.html',
            // 设置原文件;
            template: __dirname + '/src/index.html'
        }),
        // 独立打包css插件;
        new ExtractTextPlugin({
            // 设置最后css路径、名称;
            filename: 'dist/bundle.css'
        }),
        // 压缩css（注:因为没有用style-loader打包到js里所以webpack.optimize.UglifyJsPlugin的压缩本身对独立css不管用）;
        new OptimizeCssAssetsPlugin({
            // 正则匹配后缀.css文件;
            assetNameRegExp: /\.css$/,
            // 加载‘cssnano’css优化插件;
            cssProcessor: require('cssnano'),
            // 插件设置,删除所有注释;
            cssProcessorOptions: { discardComments: { removeAll: true } },
            // 设置是否可以向控制台打日志,默认为true;
            canPrint: true
        }),
        // webpack内置js压缩插件;
        new webpack.optimize.UglifyJsPlugin({
            output: {
                // remove all comments
                comments: false
            },
            // 压缩;
            compress: {
                // 关闭警告;
                warnings: false
            }
        }),
        // webpack内置自动加载插件配合resolve.alias做全局插件;
        new webpack.ProvidePlugin({
            // 文件里遇见‘$’加载jquery;
            $: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }
        })
    ],
    // 设置本地Server;
    devServer: {
        // 设置启动文件目录;
        contentBase: path.join(__dirname, 'dist'),
        // 设置端口号；
        port: 8080,
        // 设置gzip压缩;
        compress: true
        // inline:true,  //开启更新客户端入口(可在package.json scripts 里设置 npm run xxx);
        // hot: true    //设置热更新(可在package.json scripts 里设置 npm run xxx);
    },
    resolve: {
        // 设置可省略文件后缀名(注:如果有文件没有后缀设置‘’会在编译时会报错,必须改成' '中间加个空格。ps:虽然看起来很强大但有时候省略后缀真不知道加载是啥啊~);
        extensions: [' ', '.css', '.less', '.js', '.json'],
        // 查找module的话从这里开始查找;
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        // 别名设置,主要是为了配和webpack.ProvidePlugin设置全局插件;
        alias: {
            // 设置全局jquery插件;
            jquery: path.resolve(__dirname, './node_modules/jquery/dist/jquery.min.js')
        }
    }
}
