import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PostList from './../PostList'
import FullPost from './../FullPost'

class RouteNode extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={PostList}/>
                <Route path='/fullPost/:id' component={FullPost}/>
            </Switch>
        )
    }
}

export default RouteNode