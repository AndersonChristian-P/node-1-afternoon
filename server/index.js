const express = require("express")

const productCtrl = require("./productCtrl")

const app = express()
const port = 7163

app.get("/api/products", productCtrl.getProducts)
app.get("/api/products/:id", productCtrl.getProductsById)
app.get("/api/product", productCtrl.getProductByPrice)


app.listen(port, () => console.log(`listening on port ${port}`));