angular.module('app.home')

  .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home/templates/home.html',
        controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

  }]);
