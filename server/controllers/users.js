var mongoose = require('mongoose');
var User = mongoose.model('User')
var Topic = mongoose.model('Topic')


module.exports = (function(){
	return {
		
		arrayTopic: function(req, res){
			Topic.find({category: "Arrays"}, function(err, result){
				if(err){
					console.log("couldnt find arrays")
				}
				else{
					console.log("topics for Arrays:", result)
					res.json(result);
				}
			})
		},
		new: function(req, res){
			
			//Check if user exists. If user does, then we just redirect
			var user = new User ({
				name: req.body.user.name
			})
			console.log("inside user backend controller new method", user);
			user.save(function(err, result){
				if(err){
					console.log("did not save user");
					res.json(err);
				}
				else{
					console.log("new user saved");
					res.json(result);
				}
			})
		},
		stringTopic: function(req, res){
			Topic.find({category: "Strings"}, function(err, result){
				if(err){
					console.log("couldnt find strings")
				}
				else{
					console.log("topics for Strings:", result)
					res.json(result);
				}
			})
		},
		data_structuresTopic: function(req, res){
			Topic.find({category: "Data Structures"}, function(err, result){
				if(err){
					console.log("couldnt find data structures")
				}
				else{
					console.log("topics for data structures:", result)
					res.json(result);
				}
			})
		},
		sortsTopic: function(req, res){
			Topic.find({category: "Sorts"}, function(err, result){
				if(err){
					console.log("couldnt find sorts")
				}
				else{
					console.log("topics for sorts:", result)
					res.json(result);
				}
			})
		}
	}

})();

















