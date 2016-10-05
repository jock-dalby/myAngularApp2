app.controller('ComedyController', ['$scope', function($scope ) {
   $scope.comedies = [
    {
      icon: '../img/seinfeld.jpeg',
      name: 'Seinfeld',
      start_date: 1989,
      end_date: 1998,
      price: 25
    },
    {
      icon: '../img/arresteddevelopment.jpeg',
      name: 'Arrested Development',
      start_date: 2003,
      end_date: 2013,
      price: 32
    },
    {
      icon: '../img/simpsons.jpeg',
      name: 'The Simpsons',
      start_date: 1989,
      end_date: "current",
      price: 11
    },
    {
      icon: '../img/friends.jpeg',
      name: 'Friends',
      start_date: 1994,
      end_date: 2004,
      price: 19
    },
    {
      icon: '../img/familyguy.jpeg',
      name: 'Family Guy',
      start_date: 1999,
      end_date: "current",
      price: 41
    },
    {
      icon: '../img/fawlty.jpeg',
      name: 'Fawlty Towers',
      start_date: 1975,
      end_date: 1979,
      price: 18
    },
    {
      icon: '../img/raymond.jpeg',
      name: 'Everybody loves Raymond',
      start_date: 1996,
      end_date: 2005,
      price: 22
    }
  ];
}]);
