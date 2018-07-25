const express = require('express');
const router  = express.Router();
const Services = require('../models/services.js');
const Provider = require('../models/provider.js');
// const Review   = require('../models/review.js');
const User     = require('../models/user');
// const cloudinary = require('cloudinary');

router.get('/services/add', (req, res, next) => {
  res.render("services-add");
});
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



// router.get('/', (req, res, next) => {
//   let data = {
//     userName: "User",
//     bootcamp: "<span>Socialite</span>"
//     // cities: ["Miami", "London", "Paris", "Belize", "Dubai", ]
//   };
//   res.render('index', data);
// });



/* GET service page */
// router.get('/services', (req, res, next) => {
//   res.render("services");
// });

router.get('/services', (req, res, next) => {
  Services.find()
    .then(services => {
      res.render("services", { services });
    })
    .catch(error => {
      console.log(error);
    });
});

router.get('/services/:id', (req, res, next) => {
  let servicesId = req.params.id;
  if (!/^[0-9a-fA-F]{24}$/.test(servicesId)) { 
    return res.status(404).render('not-found');
  }
  Services.findOne({'_id': servicesId})
  .populate('provider')
  .then(services => {
    if (!services) {
      return res.status(404).render('not-found');
    }
      res.render("services-detail", { services });
    })
    .catch(next);
  });

  //ADD SERVICES USING SERVICES-ADD FORM

  router.get('/services/add', (req, res, next) => {
      res.render("services-add", {services});
  });

  router.post('services/add', (req, res, next) => {
    const { name, provider } = req.body;
    const newServices = new Services({ name, provider });
    newServices.save()
    .then((services) => {
      res.redirect('services');
    })
    .catch((error) => {
      console.log(error);
    });
  });
  
  //EDIT EXISTING SERVICES USING SERVICES-UPDATE FORM

  router.get('/services/edit', (req, res, next) => {
    Book.findOne({_id: req.query.book_id})
    .then((services) => {
      res.render("services-update", {services});
    })
    .catch((error) => {
      console.log(error);
    });
  });
  
  router.post('/services/edit', (req, res, next) => {
    const { name, provider } = req.body;
    Services.update({_id: req.query.services_id}, { $set: {name, provider }}, { new: true })
    .then((services) => {
      res.redirect('/services');
    })
    .catch((error) => {
      console.log(error);
    });
  });

  //ADD PROVIDER USING PROVIDER-ADD FORM ======(tested=working)======
  
  router.get('/provider/add', (req, res, next) => {
    res.render("provider-add");
  });
  
  router.post('/provider/add', (req, res, next) => {
    const { firstame, lastName, education, experience, pictureUrl } = req.body;
    const newProvider = new Provider({ firstame, lastName, education, experience, pictureUrl});
    newProvider.save()
    .then((services) => {
      res.redirect('/private');
    })
    .catch((error) => {
      console.log(error);
    });
  });



  router.get('/review/add', (req, res, next) => {
    res.render("services-review");
  });
  
  router.post('/reviews/add', (req, res, next) => {
    const { user, comments } = req.body;
    Services.update({ _id: req.query.services_id }, { $push: { reviews: { user, comments }}})
    .then(services => {
      res.redirect('/services/' + req.query.services_id);
    })
    .catch((error) => {
      console.log(error);
    });
  });


module.exports = router;
