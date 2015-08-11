var app=angular.module('myApp',[ 'ui.bootstrap']);
app.controller('myCtrl', function ($scope) {

alert("hello");
    $scope.myInterval = 3000;
    $scope.slides0 = [
    {
      image: 'images/5.jpg'
    },
    {
     image: 'images/2.jpg'
    },
    {
    image: 'images/3.jpg'
    },

     {
    image: 'images/1.jpg'
    }
  ];

   });


