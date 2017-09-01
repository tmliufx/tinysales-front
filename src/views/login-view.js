import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

class LoginView extends React.PureComponent {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <Link to="/login">login</Link>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default withRouter(LoginView);
