const mongoose = require( 'mongoose' );
const dbURI = process.env.DB_URI;
const app = require('./lib/app');
var port = process.env.PORT || 3000;
mongoose.Promise = global.Promise;


if (process.env.NODE_ENV !== 'development') {
  console.log('The process env variables: ', process.env);
}

mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
