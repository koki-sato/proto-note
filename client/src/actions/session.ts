import axios from 'axios'
import { Dispatch } from 'redux'

import { SessionResult } from '../types'

const URL = '/api/session'

export enum ActionType {
  API_SESSION_REQUEST = 'API_SESSION_REQUEST',
  API_SESSION_SUCCESS = 'API_SESSION_SUCCESS',
  API_SESSION_FAILURE = 'API_SESSION_FAILURE'
}

export interface Payload {
  data?: SessionResult
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  sessionRequest: (): Action => {
    return {
      type: ActionType.API_SESSION_REQUEST,
      payload: {}
    }
  },
  sessionSuccess: (data: SessionResult): Action => {
    return {
      type: ActionType.API_SESSION_SUCCESS,
      payload: { data }
    }
  },
  sessionFailure: (error: string): Action => {
    return {
      type: ActionType.API_SESSION_FAILURE,
      payload: { error }
    }
  }
}

export const callApi = (
  onSuccess?: (data: SessionResult) => void,
  onFailure?: (error: string) => void
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.sessionRequest())
    return axios
      .get(URL)
      .then((response: { data: SessionResult }) => {
        dispatch(actions.sessionSuccess(response.data))
        if (onSuccess) onSuccess(response.data)
      })
      .catch((error) => {
        dispatch(actions.sessionFailure(error.toString()))
        if (onFailure) onFailure(error.toString())
      })
  }
}
