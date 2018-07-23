const mongoose = require('mongoose');
const Services = require('../models/services');

const dbName = 'glam-artist';
mongoose.connect(`mongodb://localhost/${dbName}`);

const services = [
  {
    name: "Botox Injections",
    provider: "Jules",
    photo: "Painfull",
  },
  {
    name: "Fillers",
    provider: "Jules",
    photo: "Puffy",
  },
  {
    name: "BBL",
    provider: "Jules",
    photo: "Puffy",
  }
];

Services.create(services, (err) => {
  if (err) { throw(err); }
  console.log(`Created ${services.length} services`);
  mongoose.connection.close();
});