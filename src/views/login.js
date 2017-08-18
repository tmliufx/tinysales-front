import React from 'react'

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
        return <h1>Helloasdfasdf</h1>;
    }
}

Login.propTypes = {
    name: React.PropTypes.string
};

Login.defaultProps = {
    name: 'Mary'
};

export default Login;