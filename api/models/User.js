const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
})

// Enhance using devise-like library to add email/password to our model
userSchema.plugin(passportLocalMongoose, {
  userNameField: 'email',
  userNameLowerCase: true, // Ensure that all emails are lowercase
  session: false // Disable sessions as we'll use JWT
});

const User = mongoose.model('User', userSchema)

module.exports = mongoose.model('User', User);