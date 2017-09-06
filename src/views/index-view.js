import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexView extends React.PureComponent {
    render() {
        return (
            <div >
                index
            </div>
        );
    }
}

export default withRouter(IndexView);
