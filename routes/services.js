// const express    = require("express");
// const Services = require('../models/services.js');

// const router = express.Router();


// /* Get services page */
// router.get('/services', (req, res, next) => {
//     res.render('services');
  
//   });
  
//   //Get/POST services page===== start

//   router.get('/services/add', (req, res, next) => {
//     res.render("services-add");
//   });
  
//   router.get('/services', (req, res, next) => {
//     //Get all services from DB
//     Services.find({}, (err, allServices) => {
//       if (err){
//         console.log("Error in app.get");
//       } else {
//         res.render("services", {services}); 
//       } 
//     }); 
//   });
  
//   router.post("/services", (req, res) =>{
//     //get data from form and add to services array
//     var name = req.body.name;
//     var provider = req.body.provider;
//     var photo = req.body.photo;
//     var newServices = {name:name, provider:provider, photo:photo};
//     //Create new campground & save to database
//         Services.create(newServices, (err, newServices) => {
//           if (err){
//             console.log("Error in creating services");
//           } else {
//              //redirect back to services page
//             res.redirect("/services");
//           }
//         });
//   });
  
//   router.get("/services/new", (req, res) => {
//     res.render("newServices");
  
//   });
  /* GET /POST services end =========
  
  //To NOT add the layout to he home page===
  // app.get('/index', (req, res, next) => {
  //   let data = {
  //     layout: false
  //   };
  //   res.render('teams', data);
  // });
  
  
  // router.get('/services', (req, res, next) => {
  //   Services.find()
  //     .then(services => {
  //       console.log(Services);
  //       res.render("services", { services });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // });
  
  // router.get('/sevices/:id', (req, res, next) => {
  //   let bookId = req.params.id;
  //   if (!/^[0-9a-fA-F]{24}$/.test(servicesId)) { 
  //     return res.status(404).render('not-found');
  //   }
  //   Services.findOne({'_id': servicesId})
  //     .populate('provider')
  //     .then(services => {
  //       if (!services) {
  //           return res.status(404).render('not-found');
  //       }
  //       res.render("services-detail", { services });
  //     })
  //     .catch(next);
  // });
  
  // router.post('/services/add', (req, res, next) => {
  //   // var name = req.body.name;
  //   // var provider = req.body.provider;
  //   // var photo = req.body.photo;
  //   const { name, provider, photo} = req.body;
  //   const newServices = new Services({ name, provider, photo});
  //   newServices.save()
  //   .then((services) => {
  //     res.redirect('/services');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  // router.get('/service/edit', (req, res, next) => {
  //   Service.findOne({_id: req.query.service_id})
  //   .then((service) => {
  //     res.render("service-edit", {service});
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  // router.post('/service/edit', (req, res, next) => {
  //   const { name, provider, photo } = req.body;
  //   Services.update({_id: req.query.services_id}, { $set: {name, provider, photo }}, { new: true })
  //   .then((service) => {
  //     res.redirect('/service');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  
  /* SEPARATE MODEL START==================================
  
  // router.get('/authors/add', (req, res, next) => {
  //   res.render("author-add");
  // });
  
  // router.post('/authors/add', (req, res, next) => {
  //   const { name, lastName, nationality, birthday, pictureUrl } = req.body;
  //   const newAuthor = new Author({ name, lastName, nationality, birthday, pictureUrl});
  //   newAuthor.save()
  //   .then((book) => {
  //     res.redirect('/books');
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  // router.post('/reviews/add', (req, res, next) => {
  //   const { user, comments } = req.body;
  //   Book.update({ _id: req.query.book_id }, { $push: { reviews: { user, comments }}})
  //   .then(book => {
  //     res.redirect('/book/' + req.query.book_id);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // });
  
  // module.exports = router;
  
  
  
  
  
  /* SEPARATE MODEL END ================================*/