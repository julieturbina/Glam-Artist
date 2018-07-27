const express = require('express');
const router  = express.Router();
const Services = require('../models/services.js');
const Provider = require('../models/provider.js');
// const Review   = require('../models/review.js');
const User     = require('../models/user');
// const cloudinary = require('cloudinary');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// ADD A SERVICE ROUTE ===


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


  router.get('/services/add', (req, res, next) => {
    res.render("services-add");
  });

  router.post('services/add', (req, res, next) => {
    const { name, provider } = req.body;
    const newServices = new Services({ name, provider });
    newServices.save()
    .then((services) => {
      res.redirect('/private');
    })
    .catch((error) => {
      console.log(error);
    });
  });
  
  //!!!!!!!!!!EDIT EXISTING SERVICES USING SERVICES-UPDATE FORM ====Review !!!!!!!!!!!!

  router.get('/services/edit', (req, res, next) => {
    Services.findOne({_id: req.query.services_id});
    // .then((services) => {
      res.render("services-update", {services});
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  });

  router.post("/services", (req, res, next) => {
    //get data from form and add to services array
    const name = req.body.name;
    const provider = req.body.provider;
    const newServices = {name:name, provider:provider };
    services.push(newServices);
    //redirect back to services page
    res.redirect("/services");
  });

  
  
  router.post('/services/edit', (req, res, next) => {
    const { name, provider } = req.body;
    Services.update({_id: req.query.services_id}, { $set: {name, provider }}, { new: true })
    .then((services) => {
      res.redirect('/private');
    })
    .catch((error) => {
      console.log(error);
    });
  });

  //ADD PROVIDER USING PROVIDER-ADD FORM ======(tested=working)======
  
  router.get('/provider-add', (req, res, next) => {
    res.render("provider-add");
  });
  
  router.post('/provider/add', (req, res, next) => {
    const { firstName, lastName, education, experience } = req.body;
    const newProvider = new Provider({ firstName, lastName, education, experience });
    // console.log('req.body ', req.body);
    newProvider.save()
    .then((services) => {
      res.redirect('/private');
    })
    .catch((error) => {
      res.redirect('/');      
    });
  });

// PROVIDER INFORMATION ===

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
  //Get fashion page===
router.get('/fashion', (req, res, next) => {
  res.render('fashion');
});

//Get makeup page===
router.get('/makeup', (req, res, next) => {
  res.render('makeup');
});

//Get Services ID
router.get('/services-update', (req, res, next) => {
  res.render('services-update');
});

//Get Services Add
router.get('/services-add', (req, res, next) => {
  res.render('services-add');
});

//Get Services Detail
router.get('/services-review', (req, res, next) => {
  res.render('services-review');
});

//Get Services Provider Add
router.get('/provider-add', (req, res, next) => {
  res.render('provider-add');
});

//Get Services Provider Add
router.get('/private', (req, res, next) => {
  res.render('private');
});


module.exports = router;
