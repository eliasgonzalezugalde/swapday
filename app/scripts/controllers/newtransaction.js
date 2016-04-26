'use strict';

/**
 * @ngdoc function
 * @name swapdayApp.controller:NewtransactionCtrl
 * @description
 * # NewtransactionCtrl
 * Controller of the swapdayApp
 */
 angular.module('swapdayApp')
 .controller('NewtransactionCtrl', function ($scope, $http, $route, $location, $rootScope, $routeParams) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	//mis productos
 	$http.get('http://localhost:3000/products/user/'+ JSON.parse(localStorage.getItem("user_id")), {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
 		}
 	}).success(function(response){
 		$scope.myproducts = response;
 	});

 	//producto que quiero
 	$http.get('http://localhost:3000/products/'+ $routeParams.id, {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
 		}
 	}).success(function(response){
 		$scope.product = response;
 		console.log($rootScope.myproducts);
 	});

 	$scope.newSwap = function() {
 		var parameter = JSON.stringify({product_req_id:$routeParams.id, product_offered_id:$scope.myproduct, status: "true"});
 		$http.post('http://localhost:3000/transactions', parameter, {
 			headers: {
 				"Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
 			}
 		}).success(function(response){
 			$location.path('/transactions');
 			$route.reload();
 		});

 	};

 });
