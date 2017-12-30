import React from 'react'
import { connect } from 'react-redux'
import * as DATA_REDUCER from './../../reducers/reducers'
import App from './App'

class AppContainer extends React.Component {
    componentDidMount(){
        const {fetchData}=this.props
        fetchData('https://jsonplaceholder.typicode.com/posts')
    }
    render(){
        return <App />
    }
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

export default connect(null, mapDispatchToProps)(AppContainer)