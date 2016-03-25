//Mongoose
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const Card    = require('../models/Cards');
const Task = require('../models/Tasks');
//Other middlewares
const express       = require('express');
const methodOverride = require('method-override');
const path          = require('path');
const bodyParser    = require('body-parser');
const logger        = require('morgan');
//App and routers
const app           = express();
const cardRouter    = express.Router();
const taskRouter    = express.Router();
//const public        = path.join( __dirname + '/public');
//const auth = require( './auth.js' ); //un-comment once we have auth router in place
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }) );

app.use(methodOverride());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

restify.serve(cardRouter, Card, {name: 'cards'});
restify.serve(taskRouter, Task, {name: 'tasks'});

app.use( cardRouter);
app.use( taskRouter);

app.use(function(req, res, next) {
  res.status(404).send('404, no page found: ' + req.url);
});
module.exports = app;

/*
 |--------------------------------------------------------------------------
 | Login Required Middleware
 |--------------------------------------------------------------------------
 */
// function ensureAuthenticated(req, res, next) {
//   if ( req.method === 'OPTIONS' ) return next(); //Pass this to router. Our router doesn't have any method hat deals with OPTIONS request

//   if (!req.header('Authorization')) {
//     console.log(req.headers);
//     return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
//   }
//   var token = req.header('Authorization').split(' ')[1];

//   var payload = null;
//   try {
//     payload = jwt.decode(token, process.env.TOKEN_SECRET);
//   }
//   catch (err) {
//     return res.status(401).send({ message: err.message });
//   }

//   if (payload.exp <= moment().unix()) {
//     return res.status(401).send({ message: 'Token has expired' });
//   }
//   req.user = payload.sub;
//   next();
// }
