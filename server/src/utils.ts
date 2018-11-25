import { createHash } from 'crypto'
import { NextFunction, Request, Response } from 'express'
import 'express-session'
import { v4 as uuidv4 } from 'uuid'
import { ApiResult } from './types'

export const success = <T>(data: T) => ({ success: true, data, errors: [] })

export const failure = (errors: string[]) => ({ success: false, data: null, errors })

export const logRequest = (req: Request, _: Response, next: NextFunction) => {
  const user = req.session && req.session.user ? `[user:${req.session.user}]` : '[anonimus]'
  console.log(`${user} ${req.method} ${req.path}`)
  next()
}

export const sessionCheck = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.user) {
    next()
  } else {
    const result: ApiResult = failure(['Login required'])
    res.json(result)
  }
}

export const hashPassword = (password: string) => {
  const hash = createHash('sha256')
  hash.update(password)
  return hash.digest('hex')
}

export const uuid = () => {
  return uuidv4()
    .split('-')
    .join('')
}

export const isObject = (obj: any): obj is object => {
  return obj !== null && typeof obj === 'object'
}

export const merge = (a: any, b: any) => {
  for (const key in b) {
    if (isObject(a[key]) && isObject(b[key])) {
      merge(a[key], b[key])
    } else {
      a[key] = b[key]
    }
  }
  return a
}

export const clone = (obj: object) => {
  return merge({}, obj)
}
