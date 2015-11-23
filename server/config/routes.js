var users = require('./../controllers/users.js')
var topics = require('./../controllers/topics.js')
var posts = require('./../controllers/posts.js')

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
}