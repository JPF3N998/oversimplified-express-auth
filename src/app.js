import express from 'express'
import cookieParser from 'cookie-parser'
import { routers } from './routes/index.js'
import isAuthenticated from './middleware/isAuthenticated.js'
import isAuthorized from './middleware/isAuthorized.js'

const HELLO_WORLD = { Hello: 'world' }

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use('/auth', routers.auth)
app.get('/hello', (_req, res) => {
  res.json({ Hello: 'World' })
})

app.use(isAuthenticated)

app.get('/hello-with-authentication', (_req, res) => {
  res.json(HELLO_WORLD)
})

app.use(isAuthorized)
app.use('/pkmns', routers.pkmn)

app.listen(3000 , () => {
  console.log('Listening...')
})