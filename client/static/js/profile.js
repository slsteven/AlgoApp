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
	factory.getTopicStrings = function(callback){
		$http.get('/topic/strings').success(function(output){
			callback(output);
		})
	}
	factory.getTopicDataStructures = function(callback){
		$http.get('/topic/data_structures').success(function(output){
			callback(output);
		})
	}
	factory.getTopicSorts = function(callback){
		$http.get('/topic/sorts').success(function(output){
			callback(output);
		})
	}
	return factory;
})


myApp.controller('ProfileController', function ($scope, $location, TopicFactory, ProfileFactory, $rootScope, $routeParams, UserFactory){
	console.log($routeParams)

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
	//get all algos with category "arrays"
	$scope.logged_in_user = $rootScope.user;
	ProfileFactory.getTopicArrays(function(data){
		$scope.all_array_algos = data;
		// console.log("user profile front end controller get arrays:", data);
	})
	//get all algos with category "strings"
	ProfileFactory.getTopicStrings(function(data){
		$scope.all_string_algos = data;
		// console.log("user profile front end controller get strings:", data);
	})
	ProfileFactory.getTopicDataStructures(function(data){
		$scope.all_data_structures_algos = data;
		// console.log("user profile front end controller get strings:", data);
	})
	ProfileFactory.getTopicSorts(function(data){
		$scope.all_sorts_algos = data;
		// console.log("user profile front end controller get strings:", data);
	})

})











