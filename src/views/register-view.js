import React from 'react';
import { withRouter } from 'react-router-dom';

import { Layout } from 'antd';

import Navigator from '../components/navigator';

const { Header, Content, Footer } = Layout;

class IndexView extends React.PureComponent {
    render() {
        return (
            <Layout>
                <Header>
                    <Navigator />
                </Header>
                <Content style={{ minHeight: '800px' }} >
                    <div >

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
