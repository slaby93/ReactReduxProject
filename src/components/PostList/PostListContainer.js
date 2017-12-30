import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PostList from './PostList'
import './style.scss'

class PostListContainer extends React.Component {
    constructor() {
        super()
        this.showPostListOnSite = this.showPostListOnSite.bind(this)
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
        const { response } = this.props
        return (
            <ul className='PostListContainer'>
                {showPostListOnSite}
            </ul>
        )
    }
}

const mapDispatchToProps = (state) => {
    const { response } = state
    return { response }
}
export default connect(mapDispatchToProps)(PostListContainer)