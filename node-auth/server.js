// server.js

// ==== Set Up ====
// ==== Get all the tools needed ====

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var configDB = require('./config/database.js');

// ==== Configuration ====

mongoose.connect(configDB.url); // connect to the database

// require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

  // set up express application
  app.use(express.logger('dev')); // log every request to console
  app.use(express.cookieParser()); // read cookies (needed for auth)
  app.use(express.bodyParser()); // get information from html forms

  app.set('view engine', 'jade'); // set up jade for templating

  // required for passport
  app.use(express.session({ secret: 'iamthebest' })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session

});

// ==== Routes ====

require('./app/routes.js')(app, passport); // load routes, pass to app and fully configure passport

// ==== Launch ====

app.listen(port);
console.log('The magic happens on port ' + port);
