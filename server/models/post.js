var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
	content: String,
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
	votes: [{type: Schema.Types.ObjectId, ref: 'Vote'}]
});
var Post = mongoose.model('Post', PostSchema);

// UserSchema.path("name").required(true, "name can not be blank");