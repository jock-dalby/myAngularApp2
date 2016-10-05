app.controller('MainController', ['$scope', 'shows', function($scope, shows) {
 shows.success(function(data) {
   console.log('data ', data)
   $scope.shows = data;
 });
}]);
