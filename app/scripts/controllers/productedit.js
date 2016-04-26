'use strict';

/**
 * @ngdoc function
 * @name swapdayApp.controller:ProducteditCtrl
 * @description
 * # ProducteditCtrl
 * Controller of the swapdayApp
 */
 angular.module('swapdayApp')
 .controller('ProducteditCtrl', function ($scope, $http, $route, $location, $rootScope, $routeParams) {
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

 	$scope.edit = function(id) {
 		var parameter = JSON.stringify({name:$scope.product.name, description:$scope.product.description, status: "true", id_user: JSON.parse(localStorage.getItem("user_id"))});
 		$http.put('http://localhost:3000/products/'+id, parameter, {
 			headers: {
 				"Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
 			}
 		}).success(function(response){
 			$location.path('/myproducts');
 			$route.reload();
 		});

 	};

 });
