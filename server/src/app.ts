import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as session from 'express-session'
import * as path from 'path'

import routes from './routes/api'
import { logRequest } from './utils'

const publicDir = path.join(__dirname, '../public')
const indexPath = path.join(publicDir, 'index.html')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())
app.use(express.static(publicDir))
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, secure: false },
  }),
)
app.use(logRequest)

app.get('/', (_, res) => res.sendFile(indexPath))
app.get('/login', (_, res) => res.sendFile(indexPath))
app.get('/register', (_, res) => res.sendFile(indexPath))
app.get('/notes', (_, res) => res.sendFile(indexPath))
app.get('/notes/new', (_, res) => res.sendFile(indexPath))
app.get('/notes/:uuid', (_, res) => res.sendFile(indexPath))

app.use('/api', routes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
