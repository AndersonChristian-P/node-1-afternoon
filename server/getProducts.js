const products = require("../products.json")


let getProducts = (req, res) => {
  if (req.query.price) {
    return res.send(products.filter(product => {
      return product.price >= req.query.price
    }))
  } else {
    res.send(products)
  }
}






// let getProducts = (req, res) => {
//   res.status(200).send(products)
// }

module.exports = getProducts

