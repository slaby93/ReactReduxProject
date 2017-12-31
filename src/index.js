import React from 'react'
import ReactDom from 'react-dom'
import store from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RouteNode from './components/RouteNode'

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <RouteNode />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)