import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
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
        return <Link to="/login">login</Link>;
    }
}

Home.propTypes = {
    name: PropTypes.string
};

Home.defaultProps = {
    name: 'Mary'
};

export default Home;