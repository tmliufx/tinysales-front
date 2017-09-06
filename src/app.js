import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
    HashRouter as Router
} from 'react-router-dom';
import 'less/style.less';
import configureStore from './store';
import AppLayout from './views/app-layout';

/**
 * 创建store
 * @type {[type]}
 */
const rootElement = document.getElementById('root');
// 我们需要做出两个变化，将 App 组件连接到 Redux
// 并且让它能够 dispatch actions 以及从 Redux store 读取到 state。
// 在渲染之前将根组件包装进 <Provider>
// 这使得我们的 store 能为下面的组件所用
render(
    <Provider store={configureStore} key="provider">
        <Router>
            <AppLayout />
        </Router>
    </Provider>,
    rootElement
);
