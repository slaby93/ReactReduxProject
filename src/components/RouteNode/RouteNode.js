import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './../App' 
import PostList from './../PostList'
import FullPost from './../FullPost'

class RouteNode extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/postList' component={PostList}/>
                <Route path='/fullPost/:body/:id/:title/:userId' component={FullPost}/>
            </Switch>
        )
    }
}

export default RouteNode