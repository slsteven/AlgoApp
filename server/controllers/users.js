var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = (function(){
	return {
		new: function(req, res){
			console.log("inside user backend controller new method");
/**********************************************************/
			//Check if user exists. If user does, then we just redirect
			User.find({name: req.body.user.name},function (err,result){
				if(result.length < 1){
					console.log("User is not in DB. Creating new user now")
					var user = new User ({
						name: req.body.user.name
					})
					user.save(function(err, result){
						if(err){
							console.log("did not save user", {errors: err});
							res.json(err);
						}
						else{
							console.log("new user saved");
							res.json(result);
						}
					})


				}else{
					console.log(result)
					res.json(result)
				}
			})

		},

		getProgress : function(req,res){
			console.log(req.params);
			// //preparing output array
			// var output = [{category: "Strings"},{category:"Arrays"},{category:"Search"},{category:"Arrays"},{category:"Recursion"}];

			User.find({_id: req.params.id},function (err, result){
				if(err){
					console.log("Could not find progress of user")
					res.json(err)
				}else{
					console.log("User progress found")
					console.log(result)
					//repackage results for front-end in the following format:
					// for(var i = 0;i<results[0].length;i++){
						
					// }

					res.json(result)
				}
			})
		}
	}
	/**********************************************************/
})();