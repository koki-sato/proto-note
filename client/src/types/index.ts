export interface ApiResult {
  success: boolean
  data: any
  errors: string[]
}

export interface LoginQuery {
  name: string
  password: string
}

export interface LoginResult extends ApiResult {
  data: {
    name: string
  } | null
}

export interface LogoutResult extends ApiResult {
  data: null
}

export interface NoteCreateQuery {
  title: string
  markdown: string
  body: string
}

export interface NoteCreateResult extends ApiResult {
  data: null
}

export interface NoteListResult extends ApiResult {
  data:
    | {
        uuid: string
        title: string
      }[]
    | null
}

export interface NoteShowResult extends ApiResult {
  data: {
    uuid: string
    title: string
    body: string
  } | null
}

export interface RegisterQuery {
  name: string
  password: string
}

export interface RegisterResult extends ApiResult {
  data: {
    name: string
  } | null
}

export interface SessionResult extends ApiResult {
  data: null
}
