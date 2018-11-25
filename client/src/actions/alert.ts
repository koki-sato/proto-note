import { Alert } from '../store'

export enum ActionType {
  ALERT_CLOSE = 'ALERT_CLOSE',
  ALERT_OPEN = 'ALERT_OPEN',
}

export interface Payload {
  data?: Alert
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  close: (): Action => {
    return {
      type: ActionType.ALERT_CLOSE,
      payload: {},
    }
  },
  open: (alert: Alert): Action => {
    return {
      type: ActionType.ALERT_OPEN,
      payload: { data: alert },
    }
  },
}
