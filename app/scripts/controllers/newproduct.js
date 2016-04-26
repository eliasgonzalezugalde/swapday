'use strict';

/**
* @ngdoc function
* @name swapdayApp.controller:NewproductCtrl
* @description
* # NewproductCtrl
* Controller of the swapdayApp
*/
angular.module('swapdayApp')
.controller('NewproductCtrl', function ($scope, $http, $route, $location, $rootScope) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

$scope.newProduct = function(data) {
  var parameter = JSON.stringify({name:$scope.product.name, description:$scope.product.description, status: "true", id_user: JSON.parse(localStorage.getItem("user_id")), image:"images/"+$scope.product.image});
  $http.post('http://localhost:3000/products', parameter, {
    headers: {
      "Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
    }
  }).success(function(response){
    $location.path('/');
    $route.reload();
  });

};

});
