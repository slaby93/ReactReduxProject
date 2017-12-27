import React from 'react'
import './style.scss'

export const PostList = (props) => {
    const {
        post: {
            userId,
            title
        }
    } = props
    return (
        <li className='PostListContainer_PostList'>
            <div className='PostListContainer_PostList_userId'>
                userId: {userId}
            </div>
            <div className='PostListContainer_PostList_topic'>
                <span className='PostListContainer_PostList_span'>topic:</span>
                {title}
            </div>
        </li>
    )
}

export default PostList