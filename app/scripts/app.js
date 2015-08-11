'use strict';

/**
 * @ngdoc overview
 * @name guitarCenterApp
 * @description
 * # guitarCenterApp
 *
 * Main module of the application.
 */
angular
  .module('guitarCenterApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
/*  config routing, providing controller name*/
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'

      })
         .when('/buypage', {
        templateUrl: 'views/buypage.html',
        controller: 'buypageCtrl'

      })
          .when('/conformation', {
        templateUrl: 'views/conformation.html',
        controller: 'conformationCtrl'

      })


      .otherwise({
        redirectTo: '/'
      });

  });
/*  creating service and giving name as GuitarService*/
angular.module('guitarCenterApp').service('GuitarService',function($http){
/* in main.js controller inds stores valur of indexN, (parameter passed in buy button)  */
this.inds="";
/*  creating a service to get jason data*/

            return{
                getdat : function(tempdat){
                    return $http.get('/scripts/guitardata.json').success(function(resp){

                        tempdat=resp;
                    });
                }
            };
      });




