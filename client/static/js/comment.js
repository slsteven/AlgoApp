myApp.factory('CommentFactory', function($http){
	var factory = {}

	factory.newComment = function(post, callback){
		$http.post('/comments/'+post.post_id, {comment: post}).success(function(output){
			console.log("front end controller comment factory", output)
			callback()
		})
	}
	factory.getComments = function(id, callback){
		$http.get('/comments/' + id).success(function(output){
			console.log("get cmments", id, output)
			callback(output)
		})
	}
	return factory;
})




