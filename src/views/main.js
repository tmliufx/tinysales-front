import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    static defaultProps = {
        name: 'Mary'  //定义defaultprops的另一种方式
    }

    static propTypes = {
        name: React.PropTypes.string
    }

    handleClick() {
        //点击事件的处理函数
    }

    render() {
        return (
            <Layout>
            <Header>header</Header>
            <Layout>
                <Sider>left sidebar</Sider>
                <Content><Link to="/login">login1</Link></Content>
                <Sider>right sidebar</Sider>
            </Layout>
            <Footer>footer</Footer>
        </Layout>
        );
    }
}

Main.propTypes = {
    name: React.PropTypes.string
};

Main.defaultProps = {
    name: 'Mary'
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));