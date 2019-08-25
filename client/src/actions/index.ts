import * as alert from './alert'
import * as login from './login'
import * as logout from './logout'
import * as noteCreate from './noteCreate'
import * as noteList from './noteList'
import * as noteShow from './noteShow'
import * as register from './register'
import * as session from './session'

export const ActionType = {
  ...alert.ActionType,
  ...noteCreate.ActionType,
  ...noteList.ActionType,
  ...noteShow.ActionType,
  ...login.ActionType,
  ...logout.ActionType,
  ...register.ActionType,
  ...session.ActionType
}

export type ActionType = keyof typeof ActionType

export interface Payload {
  data?: any
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  alertClose: alert.actions.close,
  alertOpen: alert.actions.open,
  noteCreate: noteCreate.callApi,
  noteList: noteList.callApi,
  noteShow: noteShow.callApi,
  login: login.callApi,
  logout: logout.callApi,
  register: register.callApi,
  session: session.callApi
}

export type Actions = typeof actions
