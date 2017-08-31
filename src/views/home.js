import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link, withRouter } from 'react-router-dom';
import { Layout } from 'antd';

import * as action from '../actions/thunk-creator';
const { Header, Content, Footer } = Layout;

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { logged: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    }

    render() {
        return (
            <Layout>
                <Header>header</Header>
                <Content>
                    <Link to="/">{this.props.content}</Link>
                </Content>
                <Footer>footer</Footer>
            </Layout>
        );
    }
}

Home.propTypes = {
    content: PropTypes.string
};

Home.defaultProps = {
    content: 'main content'
};

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({ userActions: bindActionCreators(action, dispatch) });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
