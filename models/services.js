const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//Services schema below
var servicesSchema = new Schema({
  service: String,
    name: string, 
    provider: string,
    photo: string,
});

// use schema below =======

var Services = mongoose.model("Service", serviceSchema);

// var procedures = new Services({
//     name: "Dermabrasion",
//     provider: "Jules",
//     photo: "Painfull",
// });

//Save Services

// Services.save(function(err, service){
//     if(err){
//     console.log("Error!");
// } else {
//     console.log("A new service has been saved!");
// }
// });

//Find services

Services.find(function(err, service){
    if(err){
    console.log("Find Error!");
} else {
    console.log("All services!");
    console.log(services);
}
});

//Add new services

Services.create({
    name: "Dermabrasion",
    provider: "Jules",
    photo: "Painfull",
}, function(err, service){
    if(err){
    console.log("Create Error!");
} else {
    console.log(services);
}
});

//Find services

// Services.find(function(err, service){
//     if(err){
//     console.log("Find Error!");
// } else {
//     console.log("All services!");
//     console.log(services);
// }
// });

module.exports = Services;