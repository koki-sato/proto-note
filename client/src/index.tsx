import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { logger } from 'redux-logger'
import reduxThunk from 'redux-thunk'

import App from './App'
import reducers from './reducers'
import { initialState as initialAppState } from './store'

const history = createBrowserHistory()
const middlewares = [routerMiddleware(history), reduxThunk]
const initialState = { app: initialAppState }

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

const store = createStore(reducers(history), initialState, compose(applyMiddleware(...middlewares)))

const app = document.getElementById('app')

if (app instanceof Element) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    app
  )
}
