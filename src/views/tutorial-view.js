import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexView extends React.PureComponent {
    render() {
        return (
            <div>
                教程
            </div>
        );
    }
}

export default withRouter(IndexView);
