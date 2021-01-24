const mongoose = require('mongoose');
const Prinventory = require('./index.js');

const getProductPriceAndInventoryCount = async (id) => {
  let productPriceAndInventoryCount = await Prinventory.find({id: id}, {"_id": false}).select('id price inventory');
  return JSON.stringify(productPriceAndInventoryCount);
};

const getMultipleProductsPriceAndInventoryCount = async (ids) => {
  let productPricesAndInventoryCounts = await Prinventory.find({id: {$in: ids}}, {"_id": false}).select('id price inventory');
  return JSON.stringify(productPricesAndInventoryCounts);
};


module.exports = {
  getProductPriceAndInventoryCount: getProductPriceAndInventoryCount,
  getMultipleProductsPriceAndInventoryCount: getMultipleProductsPriceAndInventoryCount
};