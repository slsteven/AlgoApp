myApp.controller('RecapController', function ($scope, $sce, $compile, CommentFactory, VoteFactory, PostFactory, $rootScope, $routeParams, TopicFactory, $location){
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

})












