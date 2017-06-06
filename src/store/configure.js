import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger({
    predicate: () => false,
    collapsed: true,
    duration: true,
})

const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware);

const configureStore = function (reducer) {
    return createStore(
        reducer,
        compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
    )
}

export default configureStore

