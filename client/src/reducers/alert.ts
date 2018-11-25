import { Action, ActionType } from '../actions'
import { initialState, State } from '../store'

export const alertReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ALERT_CLOSE:
      return { ...state, isAlertOpen: false }
    case ActionType.ALERT_OPEN:
      return { ...state, isAlertOpen: true, alert: action.payload.data }
    default:
      return state
  }
}
