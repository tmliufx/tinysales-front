import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Main extends React.PureComponent {

    render() {
        return (<div>aaaaa</div>);
    }
}

export default withRouter(connect()(Main));
