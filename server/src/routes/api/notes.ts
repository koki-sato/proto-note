import * as express from 'express'
import 'express-session'

import { checkReport } from '../../admin'
import { Note } from '../../model'
import { NoteCreateQuery, NoteCreateResult, NoteListResult, NoteShowResult } from '../../types'
import { clone, failure, success, uuid } from '../../utils'

const router = express.Router()

router.get('/', async (req, res) => {
  const user = req.session!.user
  Note.findAll({ attributes: ['uuid', 'title'], where: { userId: user } })
    .then((notes) => {
      const result: NoteListResult = success(notes)
      res.json(result)
    })
    .catch((_) => {
      const result: NoteListResult = failure(['An error has occurred'])
      res.json(result)
    })
})

router.post('/create', async (req, res) => {
  const user = req.session!.user
  const params: NoteCreateQuery = clone(req.body)
  Note.create({
    uuid: uuid(),
    userId: user,
    title: params.title,
    markdown: params.markdown,
    body: params.body
  })
    .then((note) => {
      checkReport(note.uuid).catch((e) => console.log(e))
      const result: NoteCreateResult = success(null)
      res.json(result)
    })
    .catch((_) => {
      const result: NoteCreateResult = failure(['Failed to create'])
      res.json(result)
    })
})

router.get('/:uuid', async (req, res) => {
  Note.findOne({
    attributes: ['uuid', 'title', 'body'],
    where: { uuid: req.params.uuid }
  }).then((note) => {
    if (note) {
      const result: NoteShowResult = success(note)
      res.json(result)
    } else {
      const result: NoteShowResult = failure(['Not Found'])
      res.json(result)
    }
  })
})

export default router
