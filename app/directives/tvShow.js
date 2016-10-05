app.directive('tvShow', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './directives/tvShow.html'
  };
});
