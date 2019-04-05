const products = require("../products.json")

let getProduct = (req, res) => {
  let { id } = req.params
  return res.send(products.filter(product => {
    return +product.id === +id
  }))
}

module.exports = getProduct




