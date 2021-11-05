const Mongoose = require("mongoose");
require("dotenv").config();
let mongoUri;

if (process.env.MODE === "dev") {
  mongoUri = "mongodb://localhost/prinventory";
} else {
  mongoUri = "mongodb://mongo:27017/prinventory";
}

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

Mongoose.connect(mongoUri, mongooseOptions, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to mongodb");
  }
});

const PrinventorySchema = Mongoose.Schema({
  id: Number,
  price: Number,
  inventory: Number,
});

const ListNamesAndSecureTextSchema = Mongoose.Schema({
  id: Number,
  secureTransactionText: String,
  listNames: Array,
});

const Prinventory = Mongoose.model("Prinventory", PrinventorySchema);

const ListNamesAndSecureText = Mongoose.model(
  "ListNamesAndSecureText",
  ListNamesAndSecureTextSchema
);

module.exports = { Prinventory, ListNamesAndSecureText };
