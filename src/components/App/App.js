import React from 'react'
import { Redirect } from 'react-router-dom'
import PostList from './../PostList'

class App extends React.Component {
    render() {
        return (
            <Redirect to='/postList'/>
        )
    }
}

export default App