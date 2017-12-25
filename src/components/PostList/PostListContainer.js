import React from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

class PostListContainer extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     isLoaded: false,
        //     listOfPost: null
        // }
        this.parseList = this.parseList.bind(this)
    }
    parseList(list){
        return list.map((post, index)=>{
            return (
                <PostList 
                {...post} 
                key={index}
                />
            )
        })
    }
    render() {
        const {response}=this.props
        if(response){
            console.log('if', response)
            const parsedList = this.parseList(response)
            return (
                <ul className='PostListContainer'>
                    {parsedList}
                </ul>
            )
        }
        return(
            <span></span>
        )
    }
}
const mapStateToProps = (state) => {
    const { response } = state
    return { response }
}
export default connect(mapStateToProps)(PostListContainer)