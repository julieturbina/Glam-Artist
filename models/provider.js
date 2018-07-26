const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const providerSchema = new Schema({
  firstName: String,
  lastName: { type: String, required: true },
  education: { type: String, required: true },
  experience: String
 
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;