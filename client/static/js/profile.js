myApp.factory('ProfileFactory', function ($http){
	console.log("PROFILE FACTORY")
	var factory = {};

	factory.getProgress = function(user, callback){
		console.log(user.id)
		$http.get('/user/'+user.id).success(function (output){
			console.log(output)
			
		})
	}
	return factory;
})


myApp.controller('ProfileController', function ($scope, $location, ProfileFactory, $rootScope, $routeParams){
	console.log('PROFILE controller')
	console.log($routeParams)
/**********************************************************/
	$scope.getProgress = function(){
		ProfileFactory.getProgress($routeParams, function (){
			console.log('Inside getprogress')
		})	
	}

	$scope.getProgress()
/**********************************************************/
})











