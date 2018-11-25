import axios from 'axios'
import { Dispatch } from 'redux'

import { NoteCreateQuery, NoteCreateResult } from '../types'

const URL = '/api/notes/create'

export enum ActionType {
  API_NOTE_CREATE_REQUEST = 'API_NOTE_CREATE_REQUEST',
  API_NOTE_CREATE_SUCCESS = 'API_NOTE_CREATE_SUCCESS',
  API_NOTE_CREATE_FAILURE = 'API_NOTE_CREATE_FAILURE',
}

export interface Payload {
  data?: NoteCreateResult
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  noteCreateRequest: (): Action => {
    return {
      type: ActionType.API_NOTE_CREATE_REQUEST,
      payload: {},
    }
  },
  noteCreateSuccess: (data: NoteCreateResult): Action => {
    return {
      type: ActionType.API_NOTE_CREATE_SUCCESS,
      payload: { data },
    }
  },
  noteCreateFailure: (error: string): Action => {
    return {
      type: ActionType.API_NOTE_CREATE_FAILURE,
      payload: { error },
    }
  },
}

export const callApi = (
  query: NoteCreateQuery,
  onSuccess?: (data: NoteCreateResult) => void,
  onFailure?: (error: string) => void,
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.noteCreateRequest())
    return axios
      .post(URL, query)
      .then((response: { data: NoteCreateResult }) => {
        dispatch(actions.noteCreateSuccess(response.data))
        if (onSuccess) onSuccess(response.data)
      })
      .catch(error => {
        dispatch(actions.noteCreateFailure(error.toString()))
        if (onFailure) onFailure(error.toString())
      })
  }
}
