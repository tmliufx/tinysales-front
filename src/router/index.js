import React from 'react'
import { browserHistory, Router, Route, IndexRoute} from 'react-router'
import Login from 'views/login'
import Main from 'views/main'

class AppRouter extends  React.Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Login}>
                    <IndexRoute component={Login}/>
                    <Route path="login" component={Login}/>
                    <Route path="main" component={Main}/>
                </Route>
            </Router>
        )
    }
}

export default AppRouter;