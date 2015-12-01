// require express
var express = require("express");

// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
// static content 




// tell the express app to listen on port 8000
// app.listen(8000, function() {
//  console.log("listening on port 8000");
// })


app.listen(process.env.PORT || 5000)