import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Test from '../views/test';

const history = createBrowserHistory()

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Test} />
                </div>
            </Router>
        );
    }
}

export default AppRouter;
