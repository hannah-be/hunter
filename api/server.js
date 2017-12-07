const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const authMiddleware = require('./middleware/auth')

// const cors = require('cors')
const server = express()


// Plugins/Middleware
server.use(bodyParser.json()) // Allows me to have JSON uploads (POST/PUT/PATCH)
server.use(cors()) //Allow other origins to access, i.e. our react front end
server.use(authMiddleware.initialize) // Kick passport off
// server.use(cors())

// Routes
// Pass any routes set in /products on the root directory
server.use('/', [
  require('./routes/products'),
  require('./routes/auth')
])

// server.get('/', (req, res) => {
//   res.json({ message: "Work" })
// })


// Start server
server.listen(7000, (error) => {
  if (error) {
    console.log('Error starting', error)
  } else {
    console.log('Server started at http://localhost:7000/')
  }
})