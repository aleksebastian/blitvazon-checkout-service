const Mongoose = require("mongoose");
// uncomment and replace first argument in line 11 to use in db in local
const localDb = "mongodb://localhost/prinventory";
const dockerDb = "mongodb://mongo:27017/prinventory";
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

Mongoose.connect(dockerDb, mongooseOptions, (err) => {
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

const Prinventory = Mongoose.model("Prinventory", PrinventorySchema);

module.exports = Prinventory;
