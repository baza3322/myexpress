angular.module('app.dashboard')

  .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('main.dashboard', {
            url: '/dashboard',
            templateUrl: 'dashboard/templates/dashboard.html',
            controller: 'DashboardCtrl'
        });
  }])

  .controller('DashboardCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
      $rootScope.page = 'Dashboard';

      $scope.firstVisit = true;
  }]);
