import { Action, ActionType } from '../actions'
import { initialState, State } from '../store'

export const noteShowReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.API_NOTE_SHOW_REQUEST:
      return { ...state, isLoading: true }
    case ActionType.API_NOTE_SHOW_SUCCESS:
      return state.isLoading ? { ...state, isLoading: false } : state
    case ActionType.API_NOTE_SHOW_FAILURE:
      return { ...state, isLoading: false }
    default:
      return state
  }
}
