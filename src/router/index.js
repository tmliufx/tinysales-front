import React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import Login from '../views/login'
import Home from '../views/home'
import About from '../views/about'

class AppRouter extends  React.Component{
    render(){
        return (
            <ConnectedRouter history={()=>createHistory()}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                </div>
            </ConnectedRouter>
        )
    }
}

export default AppRouter;