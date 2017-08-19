import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
        return <Link to="/login">login1</Link>;
    }
}

Login.propTypes = {
    name: React.PropTypes.string
};

Login.defaultProps = {
    name: 'Mary'
};

export default Main;