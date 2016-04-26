'use strict';

angular.module('swapdayApp')
.controller('MainCtrl', function ($scope, Products, $rootScope, $http, $location, $route) {
	this.awesomeThings = [
	'HTML5 Boilerplate',
	'AngularJS',
	'Karma'
	];
	/*
	$scope.products = Products.query(function() {
	console.log("Products successfully loaded.");
}, function(error) {
console.log("There was an error loading the products.", error.statusText);
});
*/
$scope.singleProduct = function(idProduct) {
	$rootScope.myproducts = "false";
	$location.path('product/'+idProduct);
	$route.reload();
};

$http.get('http://localhost:3000/products/home/'+JSON.parse(localStorage.getItem("user_id")), {
	headers: {
		"Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
	}
}).success(function(response){
	$scope.products = response;
}, function(error) {
	console.log("There was an error loading the products.", error.statusText);
});

});
