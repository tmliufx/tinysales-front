import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import * as action from '../actions/thunk-creator';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

class Login extends React.PureComponent {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" onTouchTap={this.handleClick}/>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton onTouchTap={this.handleClick} ><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

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

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        return (
            <div>
                <AppBar
                    title="Title"
                    iconElementLeft={<IconButton onTouchTap={this.handleChange}><NavigationClose /></IconButton>}
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                />
                <Link to="/login">login</Link>
            </div>);
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