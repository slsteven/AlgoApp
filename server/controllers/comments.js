var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var Vote = mongoose.model('Vote');
var Comment = mongoose.model('Comment')

module.exports = (function(){
	return {
		all: function(req, res){
			Topic.findOne({_id: req.params.id}).populate('posts').exec(function(err, topic){
				Post.find({_topic: req.params.id}).exec(function(err, posts){
					// console.log("inside backend controller for all posts:", posts.comments)
				})
			})
		},
		add: function(req, res){
			Post.findOne({_id: req.params.id}, function(err, post){
				console.log("inside backend controller for CONTENT", req.body.comment)
				var new_comment = new Comment ({
					content: req.body.comment.content,
					_post: req.body.comment.post_id,
					_user: req.body.comment.user_id
				})
				console.log("backend controller new_comment", new_comment)
				new_comment._post = post._id
				post.comments.push(new_comment);
				new_comment.save(function(err, result){
					post.save(function(err, result){
				if(err){
					console.log("error")
				}
				else{
					console.log("save succesfull for comment")
					res.json(result)
				}
					})
				})
			})
		}
	}
})();

























