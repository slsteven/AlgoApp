var mongoose = require('mongoose');
var validate = require('mongoose-validator');
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
	name: {type: String, required: true, validate: nameValidator},
  topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  votes: [{type: Schema.Types.ObjectId, ref: 'Vote'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
  algorithms: [],
});
var User = mongoose.model('User', UserSchema);

// UserSchema.path("name").required(true, "name can not be blank");