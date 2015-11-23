var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VoteSchema = new mongoose.Schema({
	upvote: Number,
	downvote: Number,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_post: {type: Schema.Types.ObjectId, ref: 'Post'}
});
var Vote = mongoose.model('Vote', VoteSchema);

