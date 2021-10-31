const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 4003;
const app = express();
const dbQuery = require("../database/query.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));
app.use("/:id", express.static(__dirname + "/../public"));

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.get("/priceandinventory/id/:productId", (req, res) => {
  let productId = req.params.productId;
  dbQuery.getProductPriceAndInventoryCount(productId).then((productInfo) => {
    // Function returns stringified empty array '[]' which has length of 2
    if (!productInfo.length) {
      res.status(404).send("Invalid product id");
    } else {
      res.status(200).send(productInfo);
    }
  });
});

app.post("/priceandinventory/id/multiple", (req, res) => {
  let productIds = req.body;
  if (productIds.length > 30 || productIds.length === 0 || !productIds) {
    res.status(400).end();
  } else {
    dbQuery
      .getMultipleProductsPriceAndInventoryCount(productIds)
      .then((productsInfo) => res.status(200).send(productsInfo));
  }
});

app.listen(port, () => console.log(`listening on port ${port}`));

module.exports = app;
