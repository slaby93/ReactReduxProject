import React from 'react'
import { connect } from 'react-redux'
import * as DATA_REDUCER from './../reducers/reducers'

class DataBaseRequest extends React.Component {
    render() {
        const {url, fetchData}=this.props
        fetchData(url)
        return null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => {
            dispatch({type: DATA_REDUCER.FETCH_DATA_START})
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

export default connect(null, mapDispatchToProps)(DataBaseRequest)