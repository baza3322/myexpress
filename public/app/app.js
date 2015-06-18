angular.module('app', ['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
	$routeProvider
		.when('/', {
			templateUrl: 'partial/main.html',
			controller: 'mainCtrl'
		})
		.otherwise({
			redirectTo: "/"
		});
});

angular.module('app').controller('mainCtrl', function($scope){
	$scope.myVar= "Hello Angular";
})