const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const providerSchema = new Schema({
  firstName: "String",
  lastName: "String",
  education: "String",
  experience: "String",
  pictureUrl: "String",
  phone: Number,
  address: {
    street: "String",
    City: "String",
    State: "String",
    Zip: Number
  }
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;