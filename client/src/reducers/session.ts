import { Action, ActionType } from '../actions'
import { initialState, State } from '../store'

export const sessionReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.API_SESSION_REQUEST:
      return { ...state, isLoading: true }
    case ActionType.API_SESSION_SUCCESS:
      return state.isLoading
        ? action.payload.data && action.payload.data.success
          ? { ...state, isLoading: false, isLoggedIn: true, isInitialized: true }
          : { ...state, isLoading: false, isLoggedIn: false, isInitialized: true }
        : state
    case ActionType.API_SESSION_FAILURE:
      return { ...state, isLoading: false, isLoggedIn: false, isInitialized: true }
    default:
      return state
  }
}
