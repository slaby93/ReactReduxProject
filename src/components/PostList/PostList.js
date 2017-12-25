import React from 'react'
import './style.scss'

export const PostList = ({ userId, title }) => {
    console.log(userId)
    return (
        <li className='PostListContainer_PostList'>
            <div className='PostListContainer_PostList_userId'>
                userId: {userId}
            </div>
            <div className='PostListContainer_PostList_topic'>
                <span className='PostListContainer_PostList_topic_span'>topic:</span>
                {title}
            </div>
        </li>
    )
}

export default PostList