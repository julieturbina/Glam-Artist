const express = require('express');
const router  = express.Router();
const Services = require('../models/services.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/services', (req, res, next) => {
  res.render("services");
});

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
  Services.findOne({'_id': servicesId})
    .then(services => {
      res.render("services-detail", { services })
    })
    .catch(error => {
      console.log(error);
    })
});

module.exports = router;
