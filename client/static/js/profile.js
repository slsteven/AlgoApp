myApp.factory('ProfileFactory', function ($http){
	console.log("PROFILE FACTORY")
	var factory = {};

	factory.getProgress = function(user, callback){
		console.log(user.id)
		$http.get('/user/'+user.id).success(function (output){
			callback(output)
			
		})
	}

	factory.getTopicArrays = function(callback){
		$http.get('/topic/arrays').success(function(output){
			callback(output);
		})
	}
	return factory;
})


myApp.controller('ProfileController', function ($scope, $location, TopicFactory, ProfileFactory, $rootScope, $routeParams, UserFactory){
	console.log('PROFILE controller')
	console.log($routeParams)
/**********************************************************/
	$scope.getProgress = function(){
		ProfileFactory.getProgress($routeParams, function (userProgress){
			console.log(userProgress)
			$scope.progress = userProgress;
			console.log($scope.progress)
		})	
	}


	$scope.getName = function(){
		UserFactory.getName(function (userInfo){
			$scope.userInfo = userInfo
		})
	}

	$scope.logged_in_user = $rootScope.user;
	console.log("logged in user for profile controller:", $scope.logged_in_user)
	
	ProfileFactory.getTopicArrays(function(data){
		$scope.all_array_algos = data;
		console.log("user profile front end controller get arrays:", data);
	})
	


	$scope.getProgress()
	$scope.getName()
/**********************************************************/
})











