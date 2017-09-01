import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import TestView from '../views/test-view';
import IndexView from '../views/index-view';
import MainView from '../views/main-view';
import LoginView from '../views/login-view';

const history = createBrowserHistory()

class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={IndexView} />
                    <Route exact path="/login" component={LoginView} />
                    <Route exact path="/main" component={MainView} />
                    <Route exact path="/test" component={TestView} />
                </div>
            </Router>
        );
    }
}

export default AppRouter;
