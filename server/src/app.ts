import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import * as session from 'express-session'
import * as path from 'path'
import routes from './routes/api'

const publicDir = path.join(__dirname, '../public')
const indexPath = path.join(publicDir, 'index.html')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(publicDir))
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: true,
    cookie: { httpOnly: true, secure: false },
  }),
)

app.use((_, res, next) => {
  res.set(
    'Content-Security-Policy',
    `
    script-src 'self';
    style-src 'self' 'unsafe-inline';
  `.replace(/\n/g, ''),
  )
  next()
})

app.get('/', (_, res) => res.sendFile(indexPath))
app.get('/login', (_, res) => res.sendFile(indexPath))
app.get('/register', (_, res) => res.sendFile(indexPath))
app.get('/notes', (_, res) => res.sendFile(indexPath))
app.get('/notes/new', (_, res) => res.sendFile(indexPath))
app.get('/notes/:uuid', (_, res) => res.sendFile(indexPath))

app.use('/api', routes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))
