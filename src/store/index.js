import { appReducer, gameReducer } from '../reducers'
import configureStore from "./configure"

//used in devtools
const STORE_NAME_App = 'App'
const STORE_NAME_Game = 'Game'

export const appStore = configureStore(appReducer, STORE_NAME_App);
export const gameStore = configureStore(gameReducer, STORE_NAME_Game);