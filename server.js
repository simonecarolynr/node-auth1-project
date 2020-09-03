const express = require('express')
const helmet = require('helmet')
const cors = require("cors")
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)

const userRouter = require('./router/user-router')
const db = require("./data/dbConfig")


const server = express()

server.use(helmet())
server.use(cors())

server.use(express.json())
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "keep it secret",
    store: KnexSessionStore({
        knex: db,
        createTable: true
    })
}))

server.use(userRouter)

module.exports = server;