import axios from 'axios'
import { Dispatch } from 'redux'

import { LogoutResult } from '../types'

const URL = '/api/logout'

export enum ActionType {
  API_LOGOUT_REQUEST = 'API_LOGOUT_REQUEST',
  API_LOGOUT_SUCCESS = 'API_LOGOUT_SUCCESS',
  API_LOGOUT_FAILURE = 'API_LOGOUT_FAILURE'
}

export interface Payload {
  data?: LogoutResult
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  logoutRequest: (): Action => {
    return {
      type: ActionType.API_LOGOUT_REQUEST,
      payload: {}
    }
  },
  logoutSuccess: (data: LogoutResult): Action => {
    return {
      type: ActionType.API_LOGOUT_SUCCESS,
      payload: { data }
    }
  },
  logoutFailure: (error: string): Action => {
    return {
      type: ActionType.API_LOGOUT_FAILURE,
      payload: { error }
    }
  }
}

export const callApi = (
  onSuccess?: (data: LogoutResult) => void,
  onFailure?: (error: string) => void
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.logoutRequest())
    return axios
      .post(URL)
      .then((response: { data: LogoutResult }) => {
        dispatch(actions.logoutSuccess(response.data))
        if (onSuccess) onSuccess(response.data)
      })
      .catch((error) => {
        dispatch(actions.logoutFailure(error.toString()))
        if (onFailure) onFailure(error.toString())
      })
  }
}
