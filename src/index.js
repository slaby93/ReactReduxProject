import React from 'react'
import ReactDom from 'react-dom'
import AppContainer from './components/App/AppContainer'
import store from './store/store'
import {Provider} from 'react-redux'

ReactDom.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
)