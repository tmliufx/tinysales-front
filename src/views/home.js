import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import * as action from '../actions/thunk-creator';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {logged: false};
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
                <Content>main content</Content>
                <Footer>footer</Footer>
            </Layout>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string
};

Home.defaultProps = {
    name: 'Mary'
};

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.currentUser
    }
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(action, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));