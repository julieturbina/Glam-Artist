const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const servicesSchema = new Schema({
  name: String,
  provider: String,
  image: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Services = mongoose.model("services", servicesSchema);

module.exports = Services;