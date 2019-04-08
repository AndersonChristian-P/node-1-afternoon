const products = require("../products.json")

let getProducts = (req, res) => res.send(products)

let getProductsById = (req, res) => {
  let { id } = req.params
  res.send(products.filter(product => +product.id === +id))
}

let getProductByPrice = (req, res) => {
  let { price } = req.query
  res.send(products.filter(product => +product.price >= parseFloat(price)))
}

module.exports = {
  getProducts,
  getProductsById,
  getProductByPrice
};