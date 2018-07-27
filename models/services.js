const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const ObjectId = Schema.ObjectId;
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

const servicesSchema = new mongoose.Schema({
  name: "String",
  provider: "String"
 
});
  // timestamps: {
  //   createdAt: "created_at",
  //   updatedAt: "updated_at"
  // }


const Services = mongoose.model("service", servicesSchema);

module.exports = Services;