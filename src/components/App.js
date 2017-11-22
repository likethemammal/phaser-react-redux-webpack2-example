import React, { Component } from 'react'
import Game from './Game.js'

import connect from './App.connect'

class App extends Component {

    onButtonClick = () => {
        const { changeAction, on } = this.props

        changeAction(!on)
    }

    render() {
        const { on } = this.props

        return <div>
            <div onClick={this.onButtonClick}>Click Me!</div>
            {<Game/>}
        </div>
    }
}

export default connect(App)