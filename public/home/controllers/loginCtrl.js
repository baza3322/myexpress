angular.module('app.home')

  .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
          .state('login', {
              url: '/login',
              templateUrl: 'home/templates/login.html',
              controller: 'LoginCtrl'
          });
  }])

  .controller('LoginCtrl', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {

      $scope.go = function () {
          $state.go('main.dashboard');
      }
  }]);
