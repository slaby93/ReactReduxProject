import { connect } from "react-redux"

const defaultState = {
    isRequesting: false,
    response: null,
    currentPost: null,
    error: null
}

export default (state=defaultState, action) => {
    switch (action.type) {
        case FETCH_DATA_START: {
            const newState = Object.assign({}, state, {
                isRequesting: true,
                error: null
            })
            return newState
        }
        case FETCH_DATA_SUCESS: {
            const newState = Object.assign({}, state, {
                isRequesting: false,
                response: action.response
            })
            return newState
        }
        case FETCH_DATA_FAILURE: {
            const newState =  Object.assign({}, state, {
                isRequesting: false,
                response: null,
                error: action.error
            })
            return newState
        }
        case FETCH_SINGLE_POST_DATA_START: {
            const newState =  Object.assign({}, state, {
                isRequesting: true,
                currentPost: null,
                error: null
            })
            return newState
        }
        case FETCH_SINGLE_POST_DATA_SUCESS: {
            const newState =  Object.assign({}, state, {
                isRequesting: false,
                currentPost: action.response,
                error: null
            })
            return newState
        }
        case FETCH_SINGLE_POST_DATA_FALIURE: {
            const newState =  Object.assign({}, state, {
                isRequesting: false,
                currentPost: null,
                error: action.error
            })
            return newState
        }
        default: return defaultState
    }
}

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCESS = 'FETCH_DATA_SUCCES'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

export const FETCH_SINGLE_POST_DATA_START = 'FETCH_SINGLE_POST_DATA_START'
export const FETCH_SINGLE_POST_DATA_SUCESS = 'FETCH_SINGLE_POST_DATA_SUCESS'
export const FETCH_SINGLE_POST_DATA_FALIURE = 'FETCH_SINGLE_POST_DATA_FALIURE'