var express 	= require("express");
var path 		= require("path");
var app 		= express();
var bodyParser 	= require("body-parser");
var flash 		= require('connect-flash');

var morgan 			= require('morgan');
var cookieParser 	= require('cookie-parser');
var session 		= require('express-session');

require('./server/config/mongoose.js');
var passport = require('./server/config/passport.js');

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev')); //logs every request to console
app.use(cookieParser()); //read cookies (needed for auth)

app.use(session({ secret: 'algoapp' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./server/config/routes.js')(app, passport);

// tell the express app to listen on port 8000
// app.listen(8000, function() {
//  console.log("listening on port 8000");
// })

app.listen(process.env.PORT || 5000)
