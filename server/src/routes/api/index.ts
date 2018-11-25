import * as express from 'express'
import 'express-session'
import { User } from '../../model'
import {
  LoginQuery,
  LoginResult,
  LogoutResult,
  RegisterQuery,
  RegisterResult,
  SessionResult,
} from '../../types'
import { clone, failure, hashPassword, sessionCheck, success } from '../../utils'
import routes from './note'

const router = express.Router()

router.post('/login', async (req, res) => {
  const params: LoginQuery = clone(req.body)
  User.findOne({
    attributes: ['id', 'name'],
    where: { name: params.name, password: hashPassword(params.password) },
  })
    .then(instance => {
      if (instance) {
        const user: any = instance.get()
        req.session!.user = user.id
        if (user.name === user.admin) {
          res.send(process.env.FLAG2)
        } else {
          const result: LoginResult = success({ name: user.name })
          res.json(result)
        }
      } else {
        const result: LoginResult = failure(['Invalid name or password'])
        res.json(result)
      }
    })
    .catch(_ => {
      const result: LoginResult = failure(['Invalid name or password'])
      res.json(result)
    })
})

router.post('/logout', async (req, res) => {
  req.session!.destroy(error => console.log(error))
  const result: LogoutResult = success(null)
  res.json(result)
})

router.post('/register', async (req, res) => {
  const params: RegisterQuery = clone(req.body)
  User.findAll({ attributes: ['name'], where: { name: params.name } }).then(instances => {
    if (instances && instances.length > 0) {
      const result: RegisterResult = failure(['This name is already used'])
      res.json(result)
    } else {
      User.create({
        name: params.name,
        password: hashPassword(params.password),
      })
        .then(instance => {
          const user = instance.get()
          req.session!.user = user.id
          const result: RegisterResult = success({ name: user.name })
          res.json(result)
        })
        .catch(_ => {
          const result: RegisterResult = failure(['Invalid name or password'])
          res.json(result)
        })
    }
  })
})

router.get('/session', sessionCheck, async (_, res) => {
  const result: SessionResult = success(null)
  res.json(result)
})

router.use('/notes', sessionCheck, routes)

export default router
