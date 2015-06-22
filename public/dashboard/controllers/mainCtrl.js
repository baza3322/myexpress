angular.module('app.dashboard')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('main', {
            abstract: true,
            url: '/main', 
            templateUrl: 'dashboard/main.html',
            controller: 'MainCtrl'
        })

    }])

  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.toggle = true;
    $scope.toggleSidebar = function() {
      $scope.toggle = !$scope.toggle;
    };
  }]);
