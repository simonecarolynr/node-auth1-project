const express = require('express')

const userRouter = require('./router/user-router')

const server = express()
server.use(express.json())

server.use(userRouter)

module.exports = server;