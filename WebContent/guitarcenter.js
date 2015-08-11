

angular.module('myApp').controller('MyCtrl', function ($scope) {

    $scope.x="test";

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


