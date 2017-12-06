const express = require('express')
const bodyParser = require('body-parser')

// const cors = require('cors')
const server = express()


// Plugins/Middleware
server.use(bodyParser.json())
// server.use(cors())

// Routes
// Pass any routes set in /products on the root directory
server.use('/', [
  require('../api/routes/products')
])

server.get('/', (req, res) => {
  res.json({ message: "Work" })
})


// Start server
server.listen(7000, (error) => {
  if (error) {
    console.log('Error starting', error)
  } else {
    console.log('Server started at http://localhost:7000/')
  }
})