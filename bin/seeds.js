const mongoose = require('mongoose');
const Services = require('../models/services');
const Provider = require('../models/provider');
// const Review   = require('../models/review.js');
const User     = require('../models/user');

const dbtitle = 'glam-artist';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const services = [
  {
    name: "Botox Injections",
    pictureUrl: "../images/botox.png",
    provider: [ "Heidi Schuler"],
    review: "Fantastic experience.",
  },
  {
    name: " Dermal Fillers",
    pictureUrl: "../images/36943-28419-injectionjpgjpg.jpg.660x0_q80_crop-scale_upscale.jpg",
    provider: [ "Juliet Urbina"],
    review: "Great experience.",
  },
  {
    name: "Vampire Facial",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Amazing.",
  },
  {
    name: "Dermabrasion",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Wonderful.",
  },
  {
    name: "Permanent Makeup",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Fantastic experience.",
  },
  {
    name: "Eyelash Extensions",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Fantastic experience.",
  },
  {
    name: "Microblading Eyebrow Tattoo",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Fantastic experience.",
  },
  {
    name: "Juvederm Filler",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Fantastic experience.",
  },
  {
    name: "Restylane Fillers",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Fantastic experience.",
  },
  {
    name: "Sculptra Fillers",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Fantastic experience.",
  },
  {
    name: "Liquid Facelift",
    pictureUrl: "../images/facials-1.jpg",
    provider: [ "Juliet Urbina"],
    review: "Fantastic experience.",
  },

];

Services.create(services, (err) => {
  if (err) { throw(err); }
  console.log(`Created ${services.length} services`);
  mongoose.connection.close();
});

const createProvider = services.map(services => {
  const newProvider = new Provider(services.provider);
  return newProvider.save()
  .then(provider => {
    return provider.name;
  })
  .catch(error => {
    throw new Error(`Impossible to add the provider. ${error}`);
  });
});


let findProvider = Promise.all(createProvider)
  .then(provider => {
    return services.map(services => {
       return Provider.findOne({firstName: service.provider.firstName, lastName: service.provider.lastName})
        .then(provider => {
          if (!provider) {
            throw new Error(`unknown provider ${service.provider.firstName} ${service.provider.lastName}`);
          }
          return Object.assign({}, services, {provider: provider._id});
        });
    });
})
.catch(error => {
  throw new Error(error);
});

const saveServices = findProvider.then(findProviders => {
  return Promise.all(findProviders)
  .then(services => {
    return services.map(services => {
        const newServices= new Services(services);
        return newServices.save();
    });
  });
}).then(savedServices => {
  Promise.all(savedServices)
  .then(services => services.forEach(services => console.log(`created ${services.title}`)))
  .then(mongoose.connection.close())
  .catch(err => console.log("papu",err));
});


// Services.create(services, (err) => {
//   if (err) { throw(err); }iew
//   console.log(`Created ${services.length} services`);
//   mongoose.connection.close();
// });
// Review.create(review, (err) => {
//   if (err) { throw(err); }
//   console.log(`Created ${review.length} review`);
//   mongoose.connection.close();
// });