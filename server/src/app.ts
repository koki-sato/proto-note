import * as express from 'express'
import * as path from 'path'

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
