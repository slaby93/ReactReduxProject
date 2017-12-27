import React from 'react'
import { connect } from 'react-redux'
import DataBaseRequest from './../../utilites/DataBaseRequest'
import App from './App'


class AppContainer extends React.PureComponent {
    constructor() {
        super()
        this.state = {
            url: 'https://jsonplaceholder.typicode.com/posts'
        }
    }
    render() {
        const { url } = this.state
        return (
            <div>
                <DataBaseRequest url={url} />
                <App />
            </div>
        )
    }
}

export default AppContainer