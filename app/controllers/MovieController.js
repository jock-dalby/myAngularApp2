app.controller('MovieController', ['$scope', function($scope ) {
   $scope.movies = [
    {
      icon: 'img/godfather.jpeg',
      name: 'The Godfather',
      likes: 72
    },
    {
      icon: 'img/pulp.jpeg',
      name: 'Pulp Fiction',
      likes: 82
    },
    {
      icon: 'img/town.jpeg',
      name: 'The Towns',
      likes: 56
    },
    {
      icon: 'img/hsm.jpeg',
      name: 'High School Musical',
      likes: -15
    },
    {
      icon: 'img/potter.jpeg',
      name: 'Harry Potter',
      likes: 6
    },
    {
      icon: 'img/shawshank.jpg',
      name: 'The Shawshank Redemption',
      likes: 91
    }
  ];
  $scope.increase = function (index) {
    $scope.movies[index].likes++;
  };
  $scope.decrease = function (index) {
    $scope.movies[index].likes--;
  };
}]);
