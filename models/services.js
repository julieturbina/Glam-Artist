const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const servicesSchema = new Schema({
  name: "String",
  image: "String",
  provider: "String",
 
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Services = mongoose.model("services", servicesSchema);

module.exports = Services;