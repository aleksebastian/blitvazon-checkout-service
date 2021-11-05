const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 4003;
const app = express();
const dbQuery = require("../database/query.js");

// const corsOptions = {
//   origin: "http://3.142.94.151:3000",
//   optionsSuccessStatus: 200,
// };

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../public"));
app.use("/:id", express.static(__dirname + "/../public"));

app.get("/listnamesandsecuretransactiontext/id/:versionId", (req, res) => {
  dbQuery.getListNamesAndSecureTransactionText(1).then((listNamesAndText) => {
    if (!listNamesAndText) {
      res
        .status(404)
        .send("Unable to get list names and secure transation text");
    } else {
      res.status(200).send(listNamesAndText[0]);
    }
  });
});

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
