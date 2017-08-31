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
        return (
            <div>
                <li><Link to="/">main</Link></li>
                <li><Link to="/about">about</Link></li>
            </div>
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