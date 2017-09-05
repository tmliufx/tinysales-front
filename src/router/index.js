import React from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';

import TestView from '../views/test-view';
import IndexView from '../views/index-view';
import MainView from '../views/main-view';
import LoginView from '../views/login-view';
import AboutView from '../views/about-view';
import TutorialView from '../views/tutorial-view';
import RegisterView from '../views/register-view';

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={IndexView} />
                    <Route exact path="/login" component={LoginView} />
                    <Route exact path="/main" component={MainView} />
                    <Route exact path="/about" component={AboutView} />
                    <Route exact path="/tutorial" component={TutorialView} />
                    <Route exact path="/register" component={RegisterView} />
                    <Route exact path="/test" component={TestView} />
                </div>
            </Router>
        );
    }
}

export default AppRouter;
