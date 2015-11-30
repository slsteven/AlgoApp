myApp.factory('CommentFactory', function($http){
	var factory = {}

	factory.newComment = function(post, callback){
		$http.post('/comments/'+post.post_id, {comment: post}).success(function(output){
			console.log("front end controller comment factory", output)
			callback()
		})
	}
	factory.getComments = function(topic_id, callback){
		$http.get('/comments/' + topic_id).success(function(output){
			console.log("get cmments", topic_id, output)
			callback(output)
		})
	}
	return factory;
})




