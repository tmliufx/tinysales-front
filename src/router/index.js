import React from 'react'
import { Route, Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Login from '../views/login'
import Home from '../views/home'
import About from '../views/about'

const history = createBrowserHistory()

class AppRouter extends  React.Component{
    render(){
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                </div>
            </Router>
        )
    }
}

export default AppRouter;