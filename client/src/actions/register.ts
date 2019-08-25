import axios from 'axios'
import { Dispatch } from 'redux'

import { RegisterQuery, RegisterResult } from '../types'

const URL = '/api/register'

export enum ActionType {
  API_REGISTER_REQUEST = 'API_REGISTER_REQUEST',
  API_REGISTER_SUCCESS = 'API_REGISTER_SUCCESS',
  API_REGISTER_FAILURE = 'API_REGISTER_FAILURE'
}

export interface Payload {
  data?: RegisterResult
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  registerRequest: (): Action => {
    return {
      type: ActionType.API_REGISTER_REQUEST,
      payload: {}
    }
  },
  registerSuccess: (data: RegisterResult): Action => {
    return {
      type: ActionType.API_REGISTER_SUCCESS,
      payload: { data }
    }
  },
  registerFailure: (error: string): Action => {
    return {
      type: ActionType.API_REGISTER_FAILURE,
      payload: { error }
    }
  }
}

export const callApi = (
  query: RegisterQuery,
  onSuccess?: (data: RegisterResult) => void,
  onFailure?: (error: string) => void
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.registerRequest())
    return axios
      .post(URL, query)
      .then((response: { data: RegisterResult }) => {
        dispatch(actions.registerSuccess(response.data))
        if (onSuccess) onSuccess(response.data)
      })
      .catch((error) => {
        dispatch(actions.registerFailure(error.toString()))
        if (onFailure) onFailure(error.toString())
      })
  }
}
