import { appReducer, gameReducer } from '../reducers'
import configureStore from "./configure"

export const appStore = configureStore(appReducer);
export const gameStore = configureStore(gameReducer);