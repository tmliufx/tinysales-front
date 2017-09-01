import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Content } = Layout;

class LoginView extends React.PureComponent {
    render() {
        console.log(this.props);
        return (
            <Layout>
                <Header>
                    <Icon type="shop" style={{ fontSize: '4em', color: '#fff' }} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px', marginTop: '0px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu></Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Link to="/main">main</Link>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    TinySales ©2016 Created by tmliufx
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(LoginView);
