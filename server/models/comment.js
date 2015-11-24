var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
	comment: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'}
});
var Comment = mongoose.model('Comment', CommentSchema);

// UserSchema.path("name").required(true, "name can not be blank");