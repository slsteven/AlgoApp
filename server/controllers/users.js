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
/**********************************************************/
		}
	}
})();