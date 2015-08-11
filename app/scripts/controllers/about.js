'use strict';

/**
 * @ngdoc function
 * @name guitarCenterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guitarCenterApp
 */
angular.module('guitarCenterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
