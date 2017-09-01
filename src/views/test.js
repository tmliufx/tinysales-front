import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Test extends React.PureComponent {
    render() {
        return (<div>aaaaa</div>);
    }
}

export default withRouter(connect()(Test));
