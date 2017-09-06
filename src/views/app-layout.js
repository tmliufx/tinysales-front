import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

import AppRouter from '../router/index';
import Navigator from '../components/navigator';

const { Header, Content, Footer } = Layout;

class IndexView extends React.PureComponent {
    render() {
        return (
            <Layout>
                <Header>
                    <Navigator defaultSelectedKey="1" />
                </Header>
                <Content style={{ minHeight: '800px' }} >
                    <div >
                        <AppRouter />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    自由贸易联合体 ©2017 Created by TinySales
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(IndexView);
