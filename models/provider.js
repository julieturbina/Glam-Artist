const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const providerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  education: { type: String, required: true },
  experience: String
  // phone: Number,
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;