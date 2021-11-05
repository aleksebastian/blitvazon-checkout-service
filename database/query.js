const mongoose = require("mongoose");
const { Prinventory, ListNamesAndSecureText } = require("./index.js");

const getProductPriceAndInventoryCount = async (id) => {
  let productPriceAndInventoryCount = await Prinventory.find(
    { id: id },
    { _id: false }
  ).select("id price inventory");
  return productPriceAndInventoryCount;
};

const getMultipleProductsPriceAndInventoryCount = async (ids) => {
  let productPricesAndInventoryCounts = await Prinventory.find(
    { id: { $in: ids } },
    { _id: false }
  ).select("id price inventory");
  return productPricesAndInventoryCounts;
};

const getListNamesAndSecureTransactionText = async (id) => {
  let listNamesAndSecureTransactionText = await ListNamesAndSecureText.find(
    { id: id },
    { _id: false }
  ).select("listNames secureTransactionText");
  return listNamesAndSecureTransactionText;
};

module.exports = {
  getProductPriceAndInventoryCount: getProductPriceAndInventoryCount,
  getMultipleProductsPriceAndInventoryCount:
    getMultipleProductsPriceAndInventoryCount,
  getListNamesAndSecureTransactionText: getListNamesAndSecureTransactionText,
};
