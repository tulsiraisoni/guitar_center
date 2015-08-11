'use strict';

/**
 * @ngdoc function
 * @name guitarCenterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guitarCenterApp
 */
angular.module('guitarCenterApp')
  .controller('MainCtrl', function ($scope,GuitarService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
 /* setting value for ng-hide */
$scope.productDescription=true;
$scope.shippingInfodiv=true;
$scope.customerreviewsdiv=true;
$scope.apic=false;
$scope.bpic=false;
$scope.cpic=false;

$scope.minus=true;
$scope.minus1=true;
$scope.minus2=true;


/* storing value in response from json call in service- GuitarService*/
    GuitarService.getdat().then(function(response){
            $scope.jdata=response.data;
           // console.log($scope.jdata);

$scope.productchange=$scope.jdata.allProducts[$scope.ind].product_description;
$scope.shippingchange=$scope.jdata.allProducts[$scope.ind].shipping_details;
$scope.reviewchange=$scope.jdata.allProducts[$scope.ind].customer_reviews;
$scope.pricechange=$scope.jdata.allProducts[$scope.ind].price;
$scope.stockchange=$scope.jdata.allProducts[$scope.ind].stock_availability;
$scope.noofitem=$scope.jdata.allProducts[$scope.ind].no_of_items;
$scope.guitarPath=$scope.jdata.allProducts[$scope.ind].image_path;



if( $scope.stockchange===true){
  $scope.stockstatus='Available';
}
else{
  $scope.stockstatus='Not Available';
}

//console.log($scope.stockstatus)


        });







$scope.ind=0;

$scope.nxt=function(){
        $scope.ind++;
if ($scope.ind>$scope.jdata.allProducts.length-1){
   $scope.ind=0;
    }



        $scope.guitarPath=$scope.jdata.allProducts[$scope.ind].image_path;
        $scope.productchange=$scope.jdata.allProducts[$scope.ind].product_description;
        $scope.shippingchange=$scope.jdata.allProducts[$scope.ind].shipping_details;
        $scope.reviewchange=$scope.jdata.allProducts[$scope.ind].customer_reviews;
        $scope.pricechange=$scope.jdata.allProducts[$scope.ind].price;
        $scope.stockchange=$scope.jdata.allProducts[$scope.ind].stock_availability;
        $scope.noofitem=$scope.jdata.allProducts[$scope.ind].no_of_items;


if( $scope.stockchange===true){
  $scope.stockstatus='Available';
}

else{
  $scope.stockstatus='Not Available';
}

console.log($scope.stockchange);

};





$scope.prev=function(){
$scope.ind--;
  if ($scope.ind<0){
        $scope.ind=$scope.jdata.allProducts.length-1;
        }

        $scope.guitarPath=$scope.jdata.allProducts[$scope.ind].image_path;
        $scope.productchange=$scope.jdata.allProducts[$scope.ind].product_description;
        $scope.shippingchange=$scope.jdata.allProducts[$scope.ind].shipping_details;
        $scope.reviewchange=$scope.jdata.allProducts[$scope.ind].customer_reviews;
        $scope.pricechange=$scope.jdata.allProducts[$scope.ind].price;
        $scope.stockchange=$scope.jdata.allProducts[$scope.ind].stock_availability;
        $scope.noofitem=$scope.jdata.allProducts[$scope.ind].no_of_items;



if( $scope.stockchange===true){
  $scope.stockstatus='Available';
}
else{
  $scope.stockstatus='Not Available';
}

    };

  $scope.productinfo=function(){

$scope.productDescription=! $scope.productDescription;
$scope.minus=! $scope.minus;
$scope.plus=! $scope.plus;
$scope.apic=! $scope.apic;
  };





$scope.shippingInfo=function(){
$scope.shippingInfodiv=! $scope.shippingInfodiv;
$scope.minus1=! $scope.minus1;
$scope.plus1=! $scope.plus1;
$scope.cpic=! $scope.cpic;

};



$scope.customerreviews=function(){


$scope.customerreviewsdiv=! $scope.customerreviewsdiv;
$scope.minus2=! $scope.minus2;
$scope.plus2=! $scope.plus2;
$scope.bpic=! $scope.bpic;

};

 $scope.buy=function(indexN){
//console.log(indexN);
GuitarService.inds=indexN;


 };




});


