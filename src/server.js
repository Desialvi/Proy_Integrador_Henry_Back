const express = require('express');
const morgan= require('morgan')
const router = require('./routes/routes')
const cors = require('cors')

const server = express();
server.use(express.json())
server.use(morgan('dev'))
server.use(router)
server.use(cors())


module.exports = server;