import axios from 'axios'
import { Dispatch } from 'redux'

import { LoginQuery, LoginResult } from '../types'

const URL = '/api/login'

export enum ActionType {
  API_LOGIN_REQUEST = 'API_LOGIN_REQUEST',
  API_LOGIN_SUCCESS = 'API_LOGIN_SUCCESS',
  API_LOGIN_FAILURE = 'API_LOGIN_FAILURE',
}

export interface Payload {
  data?: LoginResult
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  loginRequest: (): Action => {
    return {
      type: ActionType.API_LOGIN_REQUEST,
      payload: {},
    }
  },
  loginSuccess: (data: LoginResult): Action => {
    return {
      type: ActionType.API_LOGIN_SUCCESS,
      payload: { data },
    }
  },
  loginFailure: (error: string): Action => {
    return {
      type: ActionType.API_LOGIN_FAILURE,
      payload: { error },
    }
  },
}

export const callApi = (
  query: LoginQuery,
  onSuccess?: (data: LoginResult) => void,
  onFailure?: (error: string) => void,
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.loginRequest())
    return axios
      .post(URL, query)
      .then((response: { data: LoginResult }) => {
        dispatch(actions.loginSuccess(response.data))
        if (onSuccess) onSuccess(response.data)
      })
      .catch(error => {
        dispatch(actions.loginFailure(error.toString()))
        if (onFailure) onFailure(error.toString())
      })
  }
}
