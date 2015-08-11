var app=angular.module('myApp',[ 'ui.bootstrap']);
app.controller('myCtrl', function ($scope) {


    $scope.myInterval = 2000;
    $scope.slides0 = [
    {
      image: 'images/11.jpg'
    },
    {
     image: 'images/2.jpg'
    },
    {
    image: 'images/22.jpg'
    },

     {
    image: 'images/1.jpg'
    }
  ];

    
   
    
    
   });


