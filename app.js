require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/glam-artist', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

hbs.registerPartials(__dirname + '/views/partials');

// ============services ========== 

const services = [
  {
    'name': 'Botox Injections', 
    'provider': 'Jules', 
    'photo': '../images/botox.png'
    },
    {
      'name': 'Vampire Facials', 
      'provider': 'Jules', 
      'photo': '../images/vampire-facial-facelift.jpg'
      },
      {
        'name': 'Facials', 
        'provider': 'Jules', 
        'photo': '../images/facials.jpg'
        },
];



// =======  Get static files ===========

//Get home page===
app.get('/', (req, res, next) => {
  res.render('index');
});
//Get services page===

app.get('/services', (req, res, next) => {
  res.render("services", {services:services}); 
});

app.post("/services", (req, res, next) => {
  //get data from form and add to services array
  const name = req.body.name;
  const provider = req.body.provider;
  const photo = req.body.photo;
  const newServices = {name:name, provider:provider, photo:photo};
  services.push(newServices);
  //redirect back to services page
  res.redirect("/services");
});

app.get("/services/new", (req, res) => {
  res.render("newServices");
});

//Get fashion page===
app.get('/fashion', (req, res, next) => {
  res.render('fashion');
});
//Get makeup page===
app.get('/makeup', (req, res, next) => {
  res.render('makeup');
});
//To NOT add the layout to he home page===
app.get('/index', (req, res, next) => {
  let data = {
    layout: false
  };
  res.render('teams', data);
});

// default value for title local
app.locals.title = 'Glam Artist - by Juliet Urbina';



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
