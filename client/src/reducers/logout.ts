import { Action, ActionType } from '../actions'
import { initialState, State } from '../store'

export const logoutReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.API_LOGOUT_REQUEST:
      return { ...state, isLoading: true }
    case ActionType.API_LOGOUT_SUCCESS:
      return state.isLoading ? { ...state, isLoading: false, isLoggedIn: false } : state
    case ActionType.API_LOGOUT_FAILURE:
      return { ...state, isLoading: false, isLoggedIn: false }
    default:
      return state
  }
}
