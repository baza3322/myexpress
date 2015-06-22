'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ngAnimate',
    'ngMessages',
    //third party
    'ui.bootstrap',
    'ui.router',
    //local
    'app.global',
    'app.dashboard',
    'app.home'
])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.otherwise('/');
  }])
.run(['$state', function ($state) {
//.run(['$state', 'stateWatcherService', function ($state, stateWatcherService) {
}]);
