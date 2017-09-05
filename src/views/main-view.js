import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout } from 'antd';

import Navigator from '../components/navigator';

const { Header, Content, Footer } = Layout;

class RegisterView extends React.PureComponent {
    render() {
        return (
            <Layout>
                <Header>
                    <Navigator />
                </Header>
                <Content style={{ minHeight: '800px' }} >
                    <div >
                        login
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    自由贸易联合体 ©2017 Created by TinySales
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(connect()(RegisterView));
