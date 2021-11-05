const fs = require("fs");
const Faker = require("faker");
const Chance = require("chance");
const chance = new Chance();

const createFakeData = () => {
  // centsForPrice is biased to .99 because of its popularity in prices
  let centsForPrice = [0.49, 0.75, 0.85, 0.89, 0.99, 0.99];
  let numberOfProducts = 100;
  let maxInventory = 100;
  let soldOutProductCount = 30;
  let soldOutProducts = [];

  // Get an array of 30 arbitrary indexes that will be sold out
  for (let j = 0; j < soldOutProductCount; j++) {
    let randomProductIndex = Math.floor(
      Math.random() * Math.floor(maxInventory)
    );
    soldOutProducts.push(randomProductIndex);
  }

  let productsToSave = [];

  for (let i = 0; i < numberOfProducts; i++) {
    let productId = i + 1000;
    let inventory;
    // Creating an arbitrary index of centsForPrice to add realistic prices with cents to products
    let centsIndex = Math.floor(
      Math.random() * Math.floor(centsForPrice.length)
    );
    // Get random number from faker round it and add the random cents from centsForPrice array. Prices from faker were too hight so I divided them by 10 to make them more like everyday item prices.
    let price =
      Math.round(Number(Faker.commerce.price()) / 10) +
      centsForPrice[centsIndex];
    if (price < 0) {
      price = price * price;
    } else if (price < 1) {
      price =
        Math.round(Number(Faker.commerce.price()) / 10) +
        centsForPrice[centsIndex];
    }

    if (soldOutProducts.includes(i)) {
      inventory = 0;
    } else {
      inventory = Math.floor(Math.random() * Math.floor(maxInventory));
    }

    let item = {
      id: productId,
      price: price,
      inventory: inventory,
    };
    productsToSave.push(item);
  }

  return productsToSave;
};

const createFakeListNamesAndSecureTransactionText = (id) => {
  let data = {
    id: id,
    secureTransactionText: chance.paragraph({ sentences: 3 }),
    listNames: [],
  };
  let amountOfListNames = 50;
  for (let i = 0; i < amountOfListNames; i++) {
    data.listNames.push(chance.word());
  }
  return data;
};

module.exports = {
  createFakeData,
  createFakeListNamesAndSecureTransactionText,
};
