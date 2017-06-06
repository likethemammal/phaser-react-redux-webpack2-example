import React, { Component } from 'react'
import Example from './Game.js'

export default class App extends Component {

    onButtonClick = () => {
        const { changeAction, on } = this.props

        changeAction(!on)
    }

    render() {
        const { on } = this.props

        return <div>
            <div onClick={this.onButtonClick}>Click Me!</div>
            {<Example/>}
        </div>
    }
}