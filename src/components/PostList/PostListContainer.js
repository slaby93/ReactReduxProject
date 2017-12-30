import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as DATA_REDUCER from './../../reducers/reducers'
import PostList from './PostList'
import './style.scss'

class PostListContainer extends React.Component {
    constructor() {
        super()
        this.showPostListOnSite = this.showPostListOnSite.bind(this)
    }

    componentDidMount(){
        const {fetchData}=this.props
        fetchData('https://jsonplaceholder.typicode.com/posts')
    }

    showPostListOnSite(){
        const {response}=this.props
        return response && response.map((post)=>{
            return <PostList
                post={post}
                key={post.id}
                />
        })
    }
    render() {
        const showPostListOnSite = this.showPostListOnSite()
        const { response, isRequesting } = this.props
        return (
            isRequesting
            ? <span>...Loading</span>
            : <ul className='PostListContainer'>
                {showPostListOnSite}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    const { response, isRequesting } = state
    return { response, isRequesting }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => {
            dispatch({ type: DATA_REDUCER.FETCH_DATA_START })
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    dispatch({
                        type: DATA_REDUCER.FETCH_DATA_SUCESS,
                        response
                    })
                })
                .catch(error => {
                    dispatch({
                        type: DATA_REDUCER.FETCH_DATA_FALIURE,
                        error
                    })
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)