import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Main extends React.PureComponent {
    render() {
        return (
            <div>
                <li><Link to="/">main</Link></li>
                <li><Link to="/about">about</Link></li>
            </div>
        );
    }
}

export default withRouter()(Main);
