import React from 'react'
import { connect } from 'react-redux'
import * as POST_REDUCER from './../../reducers/reducers'
import App from './App'


class AppContainer extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidUpdate() {
        const { fetchPosts } = this.props
        fetchPosts('https://jsonplaceholder.typicode.com/posts')
    }
    render() {
        const { fetchPosts } = this.props
        setTimeout(() => {
            fetchPosts('https://jsonplaceholder.typicode.com/posts')
        }, 1000)
        return (
            <App />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (url) => {
            dispatch({ type: POST_REDUCER.FETCH_DATA_START })
            fetch(url)
                .then(response => response.json())
                .then((response) => {
                    dispatch({
                        type: POST_REDUCER.FETCH_DATA_SUCCES,
                        response
                    })
                })
                .catch((error) => {
                    dispatch({
                        type: POST_REDUCER.FETCH_DATA_FAILURE,
                        error
                    })
                })
        }
    }
}

export default connect(null, mapDispatchToProps)(AppContainer)