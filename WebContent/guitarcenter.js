var app=angular.module('myApp',[ 'ui.bootstrap']);
app.controller('myCtrl', function ($scope,$http) {

$scope.orderForm=false;
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


// Simple GET request example :
$http.get('guitardata.json').
  success(function(response) {
//guitar Details
$scope.product_description=response.allProducts[0].product_description;
$scope.product_description1=response.allProducts[1].product_description;
$scope.product_description2=response.allProducts[2].product_description;
$scope.product_description3=response.allProducts[3].product_description;
$scope.product_description4=response.allProducts[4].product_description;
$scope.product_description5=response.allProducts[5].product_description;

//guitar Pic
$scope.guitarPath=response.allProducts[0].image_path;
$scope.guitarPath1=response.allProducts[1].image_path;
$scope.guitarPath2=response.allProducts[2].image_path;
$scope.guitarPath3=response.allProducts[3].image_path;
$scope.guitarPath4=response.allProducts[4].image_path;
$scope.guitarPath5=response.allProducts[5].image_path;

//Guitar price
$scope.price=response.allProducts[0].price;
$scope.price1=response.allProducts[1].price;
$scope.price2=response.allProducts[2].price;
$scope.price3=response.allProducts[3].price;
$scope.price4=response.allProducts[4].price;
$scope.price5=response.allProducts[5].price;


//shipping Details
$scope.shipping=response.allProducts[0].shipping_details;
$scope.shipping1=response.allProducts[1].shipping_details;
$scope.shipping2=response.allProducts[2].shipping_details;
$scope.shipping3=response.allProducts[3].shipping_details;
$scope.shipping4=response.allProducts[4].shipping_details;
$scope.shipping5=response.allProducts[5].shipping_details;



//Review
$scope.review=response.allProducts[0].customer_reviews;
$scope.review1=response.allProducts[1].customer_reviews;
$scope.review2=response.allProducts[2].customer_reviews;
$scope.review3=response.allProducts[3].customer_reviews;
$scope.review4=response.allProducts[4].customer_reviews;
$scope.review5=response.allProducts[5].customer_reviews;


//Stock
$scope.stock=response.allProducts[0].stock_availability;
$scope.stock1=response.allProducts[1].stock_availability;
$scope.stock2=response.allProducts[2].stock_availability;
$scope.stock3=response.allProducts[3].stock_availability;
$scope.stock4=response.allProducts[4].stock_availability;
$scope.stock5=response.allProducts[5].stock_availability;

//No Of Item
$scope.item=response.allProducts[0].no_of_items;
$scope.item1=response.allProducts[0].no_of_items;
$scope.item2=response.allProducts[0].no_of_items;
$scope.item3=response.allProducts[0].no_of_items;
$scope.item4=response.allProducts[0].no_of_items;
$scope.item5=response.allProducts[0].no_of_items;



  });



   });


