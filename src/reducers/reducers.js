import { connect } from "react-redux"

const defaultState = {
    isRequesting: false,
    response: null,
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
        default: return defaultState
    }
}

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCESS = 'FETCH_DATA_SUCCES'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'