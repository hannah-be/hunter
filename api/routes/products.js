const express = require('express')
const Product = require('../models/Product')

const router = express.Router()

//Read all Products :)
router.get('/products', (req, res) => {
  Product.find()
    .then((products) => {
      res.json({ products })
    })
    .catch((error) => {
      res.json({ error })
    })
})

//Read an individual product
// router.get('/products/:id', (req, res) => {
//   const id = req.params.id

//   Product.findById(id)
//     .then((product) => {
//       if (product) {
//         res.json(product)
//       } else {
//         res.status(404).json({ error: error.message })
//       }
//     })
//     .catch((error) => {
//       res.status(400).json({ error: error.message })
//     })
// })

// router.post('/products', (req, res) => {
//   const attributes = req.body
//   Product.create(attributes)
//     .then((product) => {
//       res.status(201).json(product)
//     })
//     .catch((error) => {
//       res.status(400).json({ error: error.message })
//     })
// })

module.exports = router