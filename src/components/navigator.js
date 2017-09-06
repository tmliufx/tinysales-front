import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Menu } from 'antd';

const propTypes = {
    history: PropTypes.object.isRequired,
    defaultSelectedKey: PropTypes.string.isRequired
};

class Navigator extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect({ item, key, selectedKeys }) {
    }

    onClick({ item, key, keyPath }) {
        if (key === this.props.defaultSelectedKey) return;
        const { history } = this.props;
        switch (key) {
        case '1':
            history.push('/');
            break;
        case '2':
            history.push('/tutorial');
            break;
        case '3':
            history.push('/about');
            break;
        case '4':
            history.push('/login');
            break;
        default:
            break;
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="banner">
                <div className="banner logo" />
                <div className="banner menu">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[this.props.defaultSelectedKey]}
                        style={{ lineHeight: '64px', margin: 0 }}
                        onClick={this.onClick}
                        onSelect={this.onSelect}
                    >
                        <Menu.Item key="1">首页</Menu.Item>
                        <Menu.Item key="2">教程</Menu.Item>
                        <Menu.Item key="3">关于</Menu.Item>
                        <Menu.Item key="4">登录</Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}

Navigator.propTypes = propTypes;

export default withRouter(Navigator);
