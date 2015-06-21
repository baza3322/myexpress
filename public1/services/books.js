
angular.module('app').factory("BooksService", function ($http, $q) {

    var deferred = $q.defer();


    var completed = $http.get('api/Books').then(function (data) {

		deferred.resolve(data);
    });
    return deferred.promise;

});
