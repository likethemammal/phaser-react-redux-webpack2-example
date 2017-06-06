import React, { Component } from 'react'
import { gameStore } from '../store'
import { changeAction } from '../actions/example'

import 'pixi'
import 'p2'

import Phaser from 'phaser'


class Game {

    constructor(store) {
        this.game = new Phaser.Game(500, 500, Phaser.CANVAS, 'butts', {
            preload: this.preload,
            create: this.create,
            update: this.update,
            render: this.render,
        })
        this.store = store
    }


    preload = () => {
        console.log('butts should be loaded')
    }

    create = () => {
        const { add, input, world, physics } = this.game

        world.resize(6000, 600)

        this.player = add.text(100, 100, "Player", {
            font: "15px Arial",
            fill: "#ffffff",
            align: "center"
        })

        physics.arcade.enable(this.player);

        this.cursors = input.keyboard.createCursorKeys()
    }


    update = () => {
        const { camera } = this.game
        const { left, right } = this.cursors
        const { on } = this.store.getState()

        if (left.isDown) {
            this.player.body.x -= on ? 8 : 4;
        } else if (right.isDown) {
            this.player.body.x += on ? 8 : 4;
        }

    }

    render = () => {

    }
}


export default class GameWrapper extends Component {

    componentDidUpdate() {
        //
    }

    componentDidMount() {
        //setup phaser

        //in game update, get redux store state on each frame

        const { on } = gameStore.getState()

        const game = new Game(gameStore)


    }

    render() {

        console.log()

        return <div id="butts">


            <button onClick={function() {
                console
                    .log('shits')
                gameStore.dispatch(changeAction(true))
            }}>Butts</button>
        </div>
    }
}