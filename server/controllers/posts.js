var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Topic = mongoose.model('Topic');
var Vote = mongoose.model('Vote');

module.exports = (function(){
	return {
		all: function(req, res){
			Topic.findOne({_id: req.params.id}).populate('posts').exec(function(err, topic){
				Post.find({_topic: req.params.id}).populate('_user').populate('votes').populate('comments').exec(function(err, posts){
					console.log("inside backend controller for all posts:", posts)
				res.json(posts)
				})
			})
		},
		new: function(req, res){
			Topic.findOne({_id: req.params.id}, function(err, topic){
				var post = new Post ({
					content: req.body.post.content,
					_topic: topic._id,
					_user: req.body.post.user_id
				})
				//add foreign keys to posts (_topic and _user)
				// post._topic = topic._id;
				// post._user = req.body.post.user_id

				topic.posts.push(post);
				post.save(function(err, result){
					topic.save(function(err, result){
				if(err){
					console.log("error")
				}
				else{
					console.log("save succesfull for posts and topic")
					res.json(result)
				}
					})
				})
			})
		},
		upvote: function(req, res){
			Post.findOne({_id: req.body.vote.post_id}, function(err, post){
				var vote = new Vote ({
				upvote: 1,
				_user: req.body.vote.user_id,
				_post: req.body.vote.post_id
				})
				vote._post = post._id;
				post.votes.push(vote);

				vote.save(function(err, result){
					post.save(function(err, result){
				if(err){
					console.log("error with voting");
				}
				else{
					console.log("good")
					res.json(result)
				}
					})
				})
			})
			
		},
		allvotes: function(req, res){
			Post.find({})
		}
	}
})();

























