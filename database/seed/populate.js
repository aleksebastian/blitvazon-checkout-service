const {
  createFakeListNamesAndSecureTransactionText,
  createFakeData,
} = require("./dataGenerator.js");
const { Prinventory, ListNamesAndSecureText } = require("../index.js");
const Mongoose = require("mongoose");

const DbSeed = async function () {
  let checkForPreviousSeedCount = await Prinventory.countDocuments();
  let checkForPreviousSeedCount2 =
    await ListNamesAndSecureText.countDocuments();
  if (checkForPreviousSeedCount) {
    await Prinventory.db.dropDatabase();
  }
  if (checkForPreviousSeedCount2) {
    await ListNamesAndSecureText.db.dropDatabase();
  }

  let dataToSave = await createFakeData();
  let listNamesAndSecureTextData =
    await createFakeListNamesAndSecureTransactionText(1);

  Prinventory.insertMany(dataToSave)
    .then((result) =>
      console.log(`Database seeded with ${result.length} items`)
    )
    .catch((err) => console.error("Error seeding database", err));

  ListNamesAndSecureText.create(listNamesAndSecureTextData)
    .then((result) =>
      console.log(`Database seeded with list names and secure text data`)
    )
    .catch((err) => console.error("Error seeding database", err))
    .finally(() => {
      console.log("Mongoose connection closing");
      Mongoose.connection.close();
    });
};

DbSeed();
createFakeListNamesAndSecureTransactionText();

module.exports = DbSeed;
