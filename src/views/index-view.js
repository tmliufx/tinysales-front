import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class IndexView extends React.PureComponent {
    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content><Link to="/login">login</Link></Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default withRouter(IndexView);
