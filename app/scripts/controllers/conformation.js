'use strict';

/**
 * @ngdoc function
 * @name guitarCenterApp.controller:conformationCtrl
 * @description
 * # conformationCtrl
 * Controller of the guitarCenterApp
 */
angular.module('guitarCenterApp')
  .controller('conformationCtrl', function ($scope,GuitarService) {

$scope.myfinalimage=GuitarService.inds;

GuitarService.getdat().then(function(response){
            $scope.jdata=response.data;
           // console.log($scope.jdata);

$scope.productchange=$scope.jdata.allProducts[$scope.myfinalimage].product_description;
$scope.guitarPath=$scope.jdata.allProducts[$scope.myfinalimage].image_path;

        });

 });