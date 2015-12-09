myApp.factory('UserFactory', function ($http){
	var factory = {};
	var userInfo;
	// factory.newUser = function(user, callback){
	// 	console.log("inside factory new user method", user)
	// 	$http.post('/user/new', {user: user}).success(function(output){
	// 		userInfo = output[0]
	// 		callback(output);

	// 	})
	// }

	factory.newUser = function(user, callback){
		console.log("inside factory new user:", user.email)
		$http.post('/signup', user).success(function(output){
			userInfo = output[0]
			callback(output);

		})
	}

	factory.getName = function (callback){
		callback(userInfo)
	}


	return factory;
})


myApp.controller('UserController', function ($scope, $location, UserFactory, $rootScope){
	// var name = prompt("HI THERE WHAT IS YOUR NAME")

	//userForm validations
	// $scope.savedUser = null;
    // $scope.save = function(x) {
    // 	console.log(x);
    //   $scope.savedUser = angular.copy(x);
    // };

	$scope.addUser = function (){ //old form
		// $rootScope.test = "test";
		$scope.user = {
			name: $scope.user.name
		};

		UserFactory.newUser($scope.user, function (data){
			console.log("data", data);
			if(data.errors){
				console.log("there are errors")
				$scope.validations = data.errors;
				$scope.user.name = "";
			}
			else {
				$rootScope.user = data;
				console.log("rootscope", $rootScope);
				$location.path('/dashboard');

			}
		});
	}
	//registration for passport
	$scope.newUser = function(signup){
		console.log("front end controller signup:", signup);
		UserFactory.newUser(signup, function(data){
			if(data.errors){
				console.log("there are errors");
				$scope.validations = data.errors;
				$scope.user.name = "";
			}
			else {
				$rootScope.user = data;
				console.log("rootscope", $rootScope);
				$location.path('/dashboard');
			}
		})
	}
	$scope.loginUser = function(login){
		console.log("front end controller login", login);
	}
})










