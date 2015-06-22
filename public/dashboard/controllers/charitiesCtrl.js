angular.module('app.dashboard')
  .controller('CharitiesCtrl', ['$scope', 'BooksService', function($scope, BooksService) {

    $scope.predicate = 'name';

    $scope.charities = [
      {
        name: 'Against Malaria Foundation',
        color: 'red'
      },
      {
        name: 'Give Directly',
        color: 'blue'
      },
      {
        name: 'Deworm the World Initiative',
        color: 'red'
      },
      {
        name: 'Environmental Working Group',
        color: 'green'
      },
      {
        name: 'ALS Association',
        color: 'blue'
      },
      {
        name: 'American Humane Association',
        color: 'orange'
      }
    ];

    $scope.changeOrder = function() {
      $scope.predicate = $scope.predicate === 'name' ? '-name' : 'name';
    }
	
	BooksService.then(
		function (data) {
			$scope.title = data.data[0].title;
		},
		function (reason) {
			console.log('Error:' + reason);
		},
		function (value) {

		}
	);

  }]);
