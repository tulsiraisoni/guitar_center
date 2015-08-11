'use strict';

/**
 * @ngdoc function
 * @name guitarCenterApp.controller:buypageCtrl
 * @description
 * # buypageCtrl
 * Controller of the guitarCenterApp
 */
angular.module('guitarCenterApp')
  .controller('buypageCtrl', function ($scope,GuitarService) {

     $scope.myfinalimage=GuitarService.inds;


    $scope.reviewdiv=true;


$scope.review=function(){
$scope.customerinfo=true;
$scope.reviewdiv=! $scope.reviewdiv;

};


$scope.editform=function(){
$scope.customerinfo=false;
$scope.reviewdiv=true;

};

GuitarService.getdat().then(function(response){
            $scope.jdata=response.data;
           // console.log($scope.jdata);

$scope.productchange=$scope.jdata.allProducts[$scope.myfinalimage].product_description;
$scope.pricechange=$scope.jdata.allProducts[$scope.myfinalimage].price;
$scope.guitarPath=$scope.jdata.allProducts[$scope.myfinalimage].image_path;


        });


  });
