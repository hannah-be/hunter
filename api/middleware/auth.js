const passport = require('passport')
const JWT = require('jsonwebtoken')
const PassportJwt = require('passport-jwt')
const User = require('../models/User')

const jwtSecret = '%fmrqhkXmYrqBGvD/o9;4P'
const jwtAlgorithm = 'HS256'
const jwtExpiresIn = '7 days'

passport.use(User.createStrategy())

function register(req, res, next) {
  // Create a new user model
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  // Create the user with teh specified password
  User.register(user, req.body.password, (error, user) => {
    if (error) {
      // Our register middleware failed with an error
      next(error)
      return
    } 
    // Store user so we can access it in our handler
    req.user = user
    // Success!
    next()
  })
}

passport.use(new PassportJwt.Strategy(
  {
    // Where will the JWT be passed in the HTTP request?
    // e.g. Authorisation: Bearer eyJhbGc...
    jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    // What is the secret?
    secretOrKey: jwtSecret,
    // What algorithm was used to sign it?
    algorithms: [jwtAlgorithm]
  }, 
  // When we have a verified token
  (payload, done) => {
    // Find the real user from our databse using the 'id' in the JWT
    User.findById(payload.sub)
    .then((user) => {
      // If user was found with id
      if (user) {
        done(null, user)
        // If no user was found
      } else {
        done(null, false)
      }
    })
    // If there was a failure
    .catch((error) => {
      done(error, false)
    })
}))

function signJWTForUser(req, res) {
  // Get the user (either just signed in or signed up)
  const user = req.user
  // Create a signed token
  const token = JWT.sign(
    // payload
    {
    email: user.email
    }, 
  // secret
    jwtSecret,
    { 
      algorithm: jwtAlgorithm,
      expiresIn: jwtExpiresIn,
      subject: user._id.toString()
    }
  )
// Send the token
  res.json({ token })
}

module.exports = {
  initialize: passport.initialize(),
  register,
  signIn: passport.authenticate('local', { session: false }),
  requireJWT: passport.authenticate('jwt', { session: false }),
  signJWTForUser
}