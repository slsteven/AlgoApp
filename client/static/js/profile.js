myApp.factory('ProfileFactory', function ($http){
	console.log("PROFILE FACTORY")
	var factory = {};

	factory.getProgress = function(user, callback){
		console.log(user.id)
		$http.get('/user/'+user.id).success(function (output){
			callback(output)
			
		})
	}
	return factory;
})


myApp.controller('ProfileController', function ($scope, $location, ProfileFactory, $rootScope, $routeParams, UserFactory){
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


	$scope.getProgress()
	$scope.getName()
/**********************************************************/
})











