var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function ($routeProvider, $locationProvider){
      $routeProvider
            .when('/', {
                  templateUrl: './static/partials/reg.html',
                  controller: 'UserController',
                  css: './static/css/style.css'
            })
            .when('/dashboard', {
                  templateUrl: './static/partials/dashboard.html',
                  controller: 'TopicController',
                  css: './static/css/style.css'
            })
            .when('/topic/:id', {
                  templateUrl: './static/partials/topic.html',
                  controller: 'PostController',
                  css: './static/css/style.css'
            })
            .when('/new/algo', { 
                  templateUrl: './static/partials/new_algo.html',
                  css: './static/css/style.css'
            })
            .when('/recap', {
                  templateUrl: './static/partials/recap.html',
                  css: './static/css/style.css'
            })
            .when('/user/:id', {
                  templateUrl: './static/partials/profile.html',
                  css: './static/css/style.css'
            })
            .otherwise({redirectTo: '/'});
});



