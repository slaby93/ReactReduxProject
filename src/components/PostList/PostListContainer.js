import React from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

class PostListContainer extends React.Component {
    constructor() {
        super()
        this.showPostList = this.showPostList.bind(this)
    }
    showPostList() {
        const { response } = this.props
        if (response) {
            return response.map((post) => {
                return <PostList
                    post={post}
                    key={post.id}
                />
            })
        }
    }
    render() {
        const showPostList = this.showPostList()
        return (
            <ul className='PostListContainer'>
                {showPostList}
            </ul>
        )
    }
}
const mapStateToProps = (state) => {
    const { response } = state
    return { response }
}
export default connect(mapStateToProps)(PostListContainer)