import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {name:'aaa'};
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
        <div>
            <li><Link to="/">main</Link></li>
            <li><Link to="/about">about</Link></li>
        </div>
        );
    }
}

Login.propTypes = {
    name: React.PropTypes.string
};

Login.defaultProps = {
    name: 'Mary'
};

export default Login;