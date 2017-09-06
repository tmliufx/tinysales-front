import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class RegisterView extends React.PureComponent {
    render() {
        return (
            <div >
                login
            </div>
        );
    }
}

export default withRouter(connect()(RegisterView));
