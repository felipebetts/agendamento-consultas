import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
import 'express-async-errors'
// import {routes} from './routes'
// import { router } from './routes'

import './database'
import { treatErrors } from './middlewares/treatErrors'

dotenv.config()

const app = express()

app.use(express.json())

const routes = require('./routes')
routes(app)
// app.use(router)

// tratamento de erros:
app.use(treatErrors)

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})