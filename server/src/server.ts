import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'

import './database'

dotenv.config()

const app = express()

app.use(express.json())

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})