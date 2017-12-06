const mongoose = require('./init')

var Product = new mongoose.model('Product', {
  brandName: String,
  name: String
})


module.exports = Product