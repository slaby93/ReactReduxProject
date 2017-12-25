import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import PostListContainer from './../PostList/PostListContainer'
import './style.scss'

class App extends React.Component{
    render(){
        return(
            <div className='App'>
                <PostListContainer/>
            </div>
        )
    }
}

export default App