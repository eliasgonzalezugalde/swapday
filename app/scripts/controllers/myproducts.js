'use strict';

/**
 * @ngdoc function
 * @name swapdayApp.controller:MyproductsCtrl
 * @description
 * # MyproductsCtrl
 * Controller of the swapdayApp
 */
 angular.module('swapdayApp')
 .controller('MyproductsCtrl', function ($scope, $http, $route, $location, $rootScope) {
  this.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];

  $scope.singleProduct = function(idProduct) {
    $rootScope.myproducts = "true";
    $location.path('product/'+idProduct);
    $route.reload();
  };

  $http.get('http://localhost:3000/products/user/'+ JSON.parse(localStorage.getItem("user_id")), {
   headers: {
    "Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
  }
}).success(function(response){
 $scope.products = response;
});

});
