require('dotenv').config();
const mongoose = require('mongoose');
const Services = require('../models/services');
const Provider = require('../models/provider');
// const Review   = require('../models/review.js');
const User     = require('../models/user');
console.log('heyyyy')
// const dbtitle = 'glam-artist';
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
.then(() => {
  console.log('Connected to Mongo!');
}).catch(err => {
  console.error('Error connecting to mongo', err);
});

const services = [
  {
    name: "Botox Injections",
    provider: "Heidi Schuler",
  },
  {
    name: " Dermal Fillers",
    provider: "Juliet Urbina",
  },
  {
    name: "Vampire Facial",
    provider: "Juliet Urbina",
  },
  {
    name: "Dermabrasion",
    provider: "Juliet Urbina",
  },
  {
    name: "Permanent Makeup",
    provider: "Juliet Urbina",
  },
  {
    name: "Eyelash Extensions",
    provider: "Juliet Urbina",

  },
  {
    name: "Microblading Eyebrow Tattoo",
    provider: "Juliet Urbina",
  },
  {
    name: "Juvederm Filler",
    provider: "Juliet Urbina",
  },
  {
    name: "Restylane Fillers",
    provider: "Juliet Urbina",
  },
  {
    name: "Sculptra Fillers",
    provider: "Juliet Urbina",
  },
  {
    name: "Liquid Facelift",
    provider: "Juliet Urbina",
  },
  {
    name: "Other Things",
    provider: "Juliet Urbina",
  },
];


//======= Testing comment below======
Services.create(services, (err) => {
  if (err) { throw(err); }
  console.log(`Created ${services.length} services`);
  mongoose.connection.close();
});

// const createProvider = services.map(services => {
//   const newProvider = new Provider(services.provider);
//   return newProvider.save()
//   .then(provider => {
//     return provider.name;
//   })
//   .catch(error => {
//     throw new Error(`Impossible to add the provider. ${error}`);
//   });
// });


// let findProvider = Promise.all(createProvider)
//   .then(provider => {
//     return services.map(services => {
//        return Provider.findOne({firstName: service.provider.firstName, lastName: service.provider.lastName})
//         .then(provider => {
//           if (!provider) {
//             throw new Error(`unknown provider ${service.provider.firstName} ${service.provider.lastName}`);
//           }
//           return Object.assign({}, services, {provider: provider._id});
//         });
//     });
// })
// .catch(error => {
//   throw new Error(error);
// });

// const saveServices = findProvider.then(findProviders => {
//   return Promise.all(findProviders)
//   .then(services => {
//     return services.map(services => {
//         const newServices= new Services(services);
//         return newServices.save();
//     });
//   });
// }).then(savedServices => {
//   Promise.all(savedServices)
//   .then(services => services.forEach(services => console.log(`created ${services.title}`)))
//   .then(mongoose.connection.close())
//   .catch(err => console.log("papu",err));
// });


// //===== Below for delete=============


// // Services.create(services, (err) => {
// //   if (err) { throw(err); }iew
// //   console.log(`Created ${services.length} services`);
// //   mongoose.connection.close();
// // });
// // Review.create(review, (err) => {
// //   if (err) { throw(err); }
// //   console.log(`Created ${review.length} review`);
// //   mongoose.connection.close();
// // });