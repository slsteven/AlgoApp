var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [2, 12],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Name should contain alpha-numeric characters only'
  })
];


var UserSchema = new mongoose.Schema({
	name: {type: String },
  topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  votes: [{type: Schema.Types.ObjectId, ref: 'Vote'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  algorithms: [],

  local: {
    email: String,
    password: String,
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  }
});


//methods =============================
//generate hash
UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', UserSchema);


















