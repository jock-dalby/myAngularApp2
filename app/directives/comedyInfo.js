app.directive('comedyInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: './directives/comedyInfo.html'
  };
});
