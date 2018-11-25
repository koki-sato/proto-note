import axios from 'axios'
import { Dispatch } from 'redux'

import { NoteShowResult } from '../types'

const URL = '/api/notes/'

export enum ActionType {
  API_NOTE_SHOW_REQUEST = 'API_NOTE_SHOW_REQUEST',
  API_NOTE_SHOW_SUCCESS = 'API_NOTE_SHOW_SUCCESS',
  API_NOTE_SHOW_FAILURE = 'API_NOTE_SHOW_FAILURE',
}

export interface Payload {
  data?: NoteShowResult
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  noteShowRequest: (): Action => {
    return {
      type: ActionType.API_NOTE_SHOW_REQUEST,
      payload: {},
    }
  },
  noteShowSuccess: (data: NoteShowResult): Action => {
    return {
      type: ActionType.API_NOTE_SHOW_SUCCESS,
      payload: { data },
    }
  },
  noteShowFailure: (error: string): Action => {
    return {
      type: ActionType.API_NOTE_SHOW_FAILURE,
      payload: { error },
    }
  },
}

export const callApi = (
  uuid: string,
  onSuccess?: (data: NoteShowResult) => void,
  onFailure?: (error: string) => void,
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.noteShowRequest())
    return axios
      .get(URL + uuid)
      .then((response: { data: NoteShowResult }) => {
        dispatch(actions.noteShowSuccess(response.data))
        if (onSuccess) onSuccess(response.data)
      })
      .catch(error => {
        dispatch(actions.noteShowFailure(error.toString()))
        if (onFailure) onFailure(error.toString())
      })
  }
}
