const mongoose = require('./init')

var Product = mongoose.model('Product', {
  brandName: String,
  name: String
})


module.exports = Product