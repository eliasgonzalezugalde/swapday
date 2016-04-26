'use strict';

/**
 * @ngdoc function
 * @name swapdayApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the swapdayApp
 */
 angular.module('swapdayApp')
 .controller('ProductCtrl', function ($scope, $http, $route, $location, $rootScope, $routeParams) {
  this.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];

  $http.get('http://localhost:3000/products/'+ $routeParams.id, {
    headers: {
     "Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
   }
 }).success(function(response){
  $scope.product = response;
  console.log($rootScope.myproducts);
});

 $scope.editProduct = function(id) {

  $location.path('productedit/'+id);
  $route.reload();

};

$scope.deleteProduct = function(id) {

  var url = "http://localhost:3000/products/" + id;
  $http.delete(url , {
    headers: {
      "Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
    }
  }).success(function(response){
    $location.path('/myproducts');
    $route.reload();
    console.log("Producto Eliminado");
  });

};

$scope.iWantIt = function(id) {

  $location.path('newtransaction/'+id);
  $route.reload();

};

});
