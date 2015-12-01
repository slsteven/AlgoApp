var mongoose = require('mongoose');
// require file-system so that we can load, read, require all of the model files
var fs = require('fs');
// connect to the database

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// mongoose.connect('mongodb://localhost/discussion_board')

if (process.env.NODE_ENV == 'development') {
  	mongoose.connect('mongodb://localhost/discussion_board');`
} else {
  mongoose.connect('mongodb://@ds059524.mongolab.com:59524/heroku_5g6smnpw/?replicaSet=test&connectTimeoutMS=300000');`
}

// specify the path to all of the models
var models_path = __dirname + '/../models'
// read all of the files in the models_path and for each one check if it is a javascript file before requiring it
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') > 0) {
    require(models_path + '/' + file);
  }
})