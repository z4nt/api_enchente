import { SqliteDialect } from '@sequelize/sqlite3'
import express from 'express'
import { Sequelize, DataTypes } from 'sequelize'

const app = express()
app.use(bodyParser.json());
const sequelize = new Sequelize({
    dialect: SqliteDialect,
    storage: 'bd.sqlite'
})

const Dados = sequelize.define('Dados', {
    
})

sequelize.sync()
app.post('/', async (req,res) => {
    await Dados.create(req.body)
})