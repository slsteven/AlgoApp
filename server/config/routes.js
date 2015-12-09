var users = require('./../controllers/users.js')
var topics = require('./../controllers/topics.js')
var posts = require('./../controllers/posts.js')
var comments = require('./../controllers/comments.js')
var test = require('../controllers/test.js');
// var passport = require('./../config/passport.js')

module.exports = function(app, passport){

	app.get('/test', function(req, res) {
		test.index(req, res);
	});

	app.post('/user/new', function(req, res){
		users.new(req, res);
	})
	//process signup form using passport

 // 	app.post('/signup', passport.authenticate('local-signup', { name: "Tommy" }, {
	// 	failureFlash: true
	// }))

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/dashboard', // redirect to the secure profile section
    failureRedirect : '/dashboard', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
	}));
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
	app.get('/posts/:id', function(req, res){1
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
	app.get('/user/:id/', function(req,res){
		users.getProgress(req,res)
	})
	app.get('/topic/arrays', function(req, res){
		users.arrayTopic(req,res)
	})
	app.get('/topic/strings', function(req, res){
		users.stringTopic(req, res)
	})
	app.get('/topic/data_structures', function(req, res){
		users.data_structuresTopic(req, res)
	})
	app.get('/topic/sorts', function(req, res){
		users.sortsTopic(req, res)
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


