import React, { Component } from 'react'
import { Provider } from "react-redux"
import App from './App'

import { appStore } from '../store'

class Root extends Component {
    render() {
        return <Provider store={appStore}>
            <App />
        </Provider>
    }
}

export default Root;
