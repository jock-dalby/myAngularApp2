app.controller('SeriesController', ['$scope', 'shows', '$routeParams', function($scope, shows, $routeParams) {
  shows.success(function(data){
    console.log('SeriesController data ', data)
    $scope.show = data[$routeParams.id];
  });
}]);
