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

angular.module('app').controller('mainCtrl', function($scope, BooksService){
	$scope.myVar= "Hello Angular";
	
	BooksService.then(
		function (data) {
			$scope.myVar = data.data;
		},
		function (reason) {
			console.log('Error:' + reason);
		},
		function (value) {

		}
	);
})