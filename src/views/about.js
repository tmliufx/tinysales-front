import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

About.propTypes = {
    name: PropTypes.string
};

About.defaultProps = {
    name: 'Mary'
};

class About extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <h1>{this.props.name}</h1>;
    }
}

export default withRouter()(About);
