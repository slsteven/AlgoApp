var users = require('./../controllers/users.js')
var topics = require('./../controllers/topics.js')
var posts = require('./../controllers/posts.js')
var comments = require('./../controllers/comments.js')

module.exports = function(app){
	app.post('/user/new', function(req, res){
		users.new(req, res);
	})
	//routes for topics controller
	app.post('/topic/new', function(req, res){
		topics.new(req, res);
	})
	app.get('/topics', function(req, res){
		topics.all(req, res);
	})
	//routes for posts
	app.post('/post/:id', function(req, res){
		posts.new(req, res);
	})
	app.get('/posts/:id', function(req, res){
		posts.all(req, res);
	})
	//routes for votes
	app.post('/votes/new', function(req, res){
		posts.upvote(req, res);
	})
	app.get('votes', function(req, res){
		posts.allvotes(req, res);
	})
	//routes for user profile
	app.get('/user/:id/', function (req,res){
		users.getProgress(req,res)
	})
	app.get('/topic/arrays', function(req, res){
		users.arrayTopic(req,res);
	})
	//routes for comments
	//id refers to post_id
	app.post('/comments/:id', function(req, res){
		comments.add(req, res);
	})
	app.get('/comments/:id', function(req, res) {
		comments.all(req, res);
	})
}