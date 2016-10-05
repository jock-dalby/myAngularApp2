// In app.js, we created a new module named myApp. A module contains the different components of an AngularJS app.

var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
  .when('/series', {
    controller: 'MainController',
    templateUrl: 'views/home.html'
  })
  .when('/series/:id', {
    controller: 'SeriesController',
    templateUrl: 'views/series.html'
  })
  .otherwise({
    redirectTo: '/series'
  });
});
