myApp.factory('PostFactory', function($http){
	var factory = {};
	factory.newPost = function(post, callback){
		console.log("inside new post factory method")
		//:id == id of topic
		$http.post('/post/'+post.topic_id, {post: post}).success(function(output){
			callback();
		})
	}
	//:id == id of topic
	factory.getPosts = function(post, callback){
		$http.get('/posts/'+post).success(function(output){
			console.log("getposts on success", output)
			callback(output)
		})
	}


	return factory;
})

myApp.factory('VoteFactory', function($http){
	var factory = {}

	factory.upVote = function(vote){
		console.log("vote factory add vote", vote)
		//vote includes topicid, userid, and value of vote
		$http.post('/votes/new', {vote: vote}).success(function(output){
			console.log("success with voting")
		})
	}

	//get total of upvotes and downvotes
	factory.getVotes = function(callback){
		$http.get('/votes').success(function(output){
			callback(output);
		})
	}
	return factory;
})

myApp.controller('PostController', function ($scope, $sce, $compile, VoteFactory, PostFactory, $rootScope, $routeParams, TopicFactory){
	//checked for logged in user
	$scope.logged_in_user = $rootScope.user
	//get topic id
	$scope.topic_id = $routeParams.topic_id
	console.log("topicid", $scope.topic_id)

	//get all posts related to topic
	PostFactory.getPosts($scope.topic_id, function(data){
		console.log("post controller front end, topic id:", data)
		var formatted_post = []
		for(var i = 0; i<data.length; i++){
			// console.log("obj", data[i].content)
			data[i].content = $sce.trustAsHtml(data[i].content)
		}
		console.log("formatted_post", data)
		$scope.all_posts = data;
		// $scope.all_posts = data;
	})
	//fill out topic information
	TopicFactory.getTopics(function(data){
		$scope.all_topics = data;
		console.log("all_topics:", data)
	})

	//add post/answer for a certain topic (/topic/:id)
	$scope.addPost = function(post){
		console.log("post controller new post:", post)
		$scope.new_post = {
			content: post.content,
			user_id: $scope.logged_in_user._id,
			topic_id: $scope.topic_id,
			name: $scope.logged_in_user.name
		}
		PostFactory.newPost($scope.new_post, function(){
			console.log("add a new post, topic id", $scope.topic_id)
			PostFactory.getPosts($scope.topic_id, function(data){
				var formatted_post = []
				for(var i = 0; i<data.length; i++){
					// console.log("obj", data[i].content)
					data[i].content = $sce.trustAsHtml(data[i].content)
				}
				$scope.all_posts = data;
			})
		})
	}

	$scope.upVote = function(postid){
		$scope.upvote_repack = {
			user_id: $scope.logged_in_user._id,
			post_id: postid
		}
		VoteFactory.upVote($scope.upvote_repack)
	}

	VoteFactory.getVotes(function(data){
		$scope.all_votes = data;
	})

	// COMMENTS

	$scope.addComment = function(postid){
		$scope.comment_repack = {
			user_id: $scope.logged_in_user.user_id,
			content: $scope.addNew.comment,
			post_id: postid
		}
		CommentFactory.addComment($scope.comment_repack)
	}


})












