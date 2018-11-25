import axios from 'axios'
import { Dispatch } from 'redux'

import { NoteListResult } from '../types'

const URL = '/api/notes'

export enum ActionType {
  API_NOTE_LIST_REQUEST = 'API_NOTE_LIST_REQUEST',
  API_NOTE_LIST_SUCCESS = 'API_NOTE_LIST_SUCCESS',
  API_NOTE_LIST_FAILURE = 'API_NOTE_LIST_FAILURE',
}

export interface Payload {
  data?: NoteListResult
  error?: string
}

export interface Action {
  type: ActionType
  payload: Payload
  meta?: any
}

export const actions = {
  noteListRequest: (): Action => {
    return {
      type: ActionType.API_NOTE_LIST_REQUEST,
      payload: {},
    }
  },
  noteListSuccess: (data: NoteListResult): Action => {
    return {
      type: ActionType.API_NOTE_LIST_SUCCESS,
      payload: { data },
    }
  },
  noteListFailure: (error: string): Action => {
    return {
      type: ActionType.API_NOTE_LIST_FAILURE,
      payload: { error },
    }
  },
}

export const callApi = (
  onSuccess?: (data: NoteListResult) => void,
  onFailure?: (error: string) => void,
) => {
  return (dispatch: Dispatch) => {
    dispatch(actions.noteListRequest())
    return axios
      .get(URL)
      .then((response: { data: NoteListResult }) => {
        dispatch(actions.noteListSuccess(response.data))
        if (onSuccess) onSuccess(response.data)
      })
      .catch(error => {
        dispatch(actions.noteListFailure(error.toString()))
        if (onFailure) onFailure(error.toString())
      })
  }
}
