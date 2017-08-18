import React from 'react'

class About extends React.PureComponent {
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
        return <h1>Hello, {this.props.name}</h1>;
    }
}

About.propTypes = {
    name: React.PropTypes.string
};

About.defaultProps = {
    name: 'Mary'
};

export default About;