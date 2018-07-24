const mongoose = require("mongoose");

const Schema   = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const reviewSchema = new Schema({
  user: "String",
  comments: "String", 
});

const Provider = mongoose.model("Review", reviewSchema);

module.exports = Review;