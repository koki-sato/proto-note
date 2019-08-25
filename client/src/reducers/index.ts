import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers, Reducer } from 'redux'

import { alertReducer } from './alert'
import { loginReducer } from './login'
import { logoutReducer } from './logout'
import { noteCreateReducer } from './noteCreate'
import { noteListReducer } from './noteList'
import { noteShowReducer } from './noteShow'
import { registerReducer } from './register'
import { sessionReducer } from './session'

const reduceReducers = <S>(reducers: Reducer<S, any>[]) =>
  reducers.reduce<Reducer<S, any>>(
    (previousValue, currentValue) => (state, action) =>
      currentValue(previousValue(state, action), action),
    (state, _) => state as S
  )

const reducer = reduceReducers([
  alertReducer,
  loginReducer,
  logoutReducer,
  registerReducer,
  noteCreateReducer,
  noteListReducer,
  noteShowReducer,
  sessionReducer
])

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app: reducer
  })
