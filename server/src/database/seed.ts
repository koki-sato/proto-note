import { Note, User } from '../model'
import { hashPassword, uuid } from '../utils'

export const seed = () =>
  User.sync({ force: true })
    .then(() => Note.sync({ force: true }))
    .then(() =>
      User.create({
        name: 'admin',
        password: hashPassword(process.env.ADMIN_PASSWORD as string)
      })
    )
    .then((user) =>
      Note.create({
        uuid: uuid(),
        userId: user.id,
        title: 'FLAG1',
        markdown: process.env.FLAG1 as string,
        body: process.env.FLAG1 as string
      })
    )
    .then(() => {
      console.log('Finished!')
      process.exit(0)
    })

seed()
