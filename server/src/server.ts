import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
// import routes from './routes'

import './database'

dotenv.config()

const app = express()

app.use(express.json())

// app.use(routes)
const routes = require('./routes')
routes(app)

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
    console.log(Date.now())
})