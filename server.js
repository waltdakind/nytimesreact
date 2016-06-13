/* React NY Times API
 * =============================================================================== */

// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var methodOverride = require('method-override')

// start the express app
var app = express();

// use logger in dev mode
app.use(logger('dev'));

// bodyparser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// make static folder
var finalBuild = __dirname + '/build';
app.use(express.static(finalBuild));


// mongoose config
mongoose.connect('mongodb://testuser:test1234@ds059284.mlab.com:59284/nytimesapp');
//mongoose.connect('mongodb://testuser:test1234@localhost/nytimesapp');
var db = mongoose.connection;

// mongoose connection
db.on('error', function(err){
    console.log('Mongoose returned the following error: ', err);
});
// connection notification
db.once('open', function(){
    console.log('Mongoose connection successful!');
})

// api route
require('./app/config/routes.js')(app);

// define port
var PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, function(){
    console.log('app listening on' + PORT);
})
