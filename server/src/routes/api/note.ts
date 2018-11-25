import * as express from 'express'
import 'express-session'
import { Note } from '../../model'
import { NoteCreateQuery, NoteCreateResult, NoteListResult, NoteShowResult } from '../../types'
import { clone, failure, success, uuid } from '../../utils'

const router = express.Router()

router.get('/', async (req, res) => {
  const user = req.session!.user
  Note.findAll({ attributes: ['uuid', 'title'], where: { user_id: user } })
    .then(instances => {
      const notes = instances.map(instance => instance.get())
      const result: NoteListResult = success(notes)
      res.json(result)
    })
    .catch(_ => {
      const result: NoteListResult = failure(['An error has occurred'])
      res.json(result)
    })
})

router.post('/create', async (req, res) => {
  const user = req.session!.user
  const params: NoteCreateQuery = clone(req.body)
  Note.create({
    uuid: uuid(),
    user_id: user,
    title: params.title,
    markdown: params.markdown,
    body: params.body,
  })
    .then(_ => {
      const result: NoteCreateResult = success(null)
      res.json(result)
    })
    .catch(_ => {
      const result: NoteCreateResult = failure(['Failed to create'])
      res.json(result)
    })
})

router.get('/:uuid', async (req, res) => {
  const user = req.session!.user
  Note.findOne({
    attributes: ['uuid', 'title', 'body'],
    where: { uuid: req.params.uuid, user_id: user },
  }).then(instance => {
    if (instance) {
      const note = instance.get()
      const result: NoteShowResult = success(note)
      res.json(result)
    } else {
      const result: NoteShowResult = failure(['Not Found'])
      res.json(result)
    }
  })
})

export default router
