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

	app.get('/home', function(req, res){
		 console.log("redirect bc of failure",req.errors.message)

	})

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/dashboardSignup', // redirect to the secure profile section
    failureRedirect : '/home', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
	}));


	app.get('/dashboardSignup', function(req, res){
  	// console.log("req:", req.user);
  	users.dashboardSignup(req, res);
  })


	// process the login form
  app.post('/login', passport.authenticate('local-login', {
			successRedirect : '/dashboardLogin', // redirect to the secure profile section
    	failureRedirect : '/home', // redirect back to the signup page if there is an error
    	failureFlash : true // allow flash messages
  }));

  app.get('/dashboardLogin', function(req, res){
  	console.log("routes login method", req.user);
  	users.findLastUser(req, res);
  })

   // route for showing the profile page
    // app.get('/profile', isLoggedIn, function(req, res) {
    //     res.render('profile.ejs', {
    //         user : req.user // get the user out of session and pass to template
    //     });
    // });

  // =====================================
  // FACEBOOK ROUTES =====================
  // =====================================
  // route for facebook authentication and login
  app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

  // console.log(passport.authenticate('facebook', { scope : 'email' }))
  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  		failureRedirect : '/dashboard'}),
  		function(req, res){
  			res.redirect('/dashboard');
  	});

  // route for logging out
  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });


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
	app.get('/votes', function(req, res){
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


// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
    		console.log("logged in")
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
