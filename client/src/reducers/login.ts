import { Action, ActionType } from '../actions'
import { initialState, State } from '../store'

export const loginReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.API_LOGIN_REQUEST:
      return { ...state, isLoading: true }
    case ActionType.API_LOGIN_SUCCESS:
      return state.isLoading
        ? action.payload.data && action.payload.data.success
          ? { ...state, isLoading: false, isLoggedIn: true }
          : { ...state, isLoading: false, isLoggedIn: false }
        : state
    case ActionType.API_LOGIN_FAILURE:
      return { ...state, isLoading: false, isLoggedIn: false }
    default:
      return state
  }
}
