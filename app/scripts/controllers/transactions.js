'use strict';

/**
 * @ngdoc function
 * @name swapdayApp.controller:TransactionsCtrl
 * @description
 * # TransactionsCtrl
 * Controller of the swapdayApp
 */
 angular.module('swapdayApp')
 .controller('TransactionsCtrl', function ($scope, $http, $route, $location, $rootScope) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$http.get('http://localhost:3000/transactions/userreq/'+JSON.parse(localStorage.getItem("user_id")), {
 		headers: {
 			"Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
 		}
 	}).success(function(response){
 		debugger;
 		//console.log(response); //transactions
 		$scope.transactions = response; //revisar
 		var productsReq = [];
 		var productsOffe = [];
 		for (var i = 0; i < response.length; i++) { //recorre las transacciones

 			$http.get('http://localhost:3000/products/'+response[i].product_req_id, {
 				headers: {
 					"Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
 				}
 			}).success(function(response1){ //response1 = producto requerido
 				productsReq.push(response1);
 				//$scope.product_req = response1;
 			});

 			$http.get('http://localhost:3000/products/'+response[i].product_offered_id, {
 				headers: {
 					"Authorization": 'Token token="' + JSON.parse(localStorage.getItem("token")) + '"'
 				}
 			}).success(function(response2){ //response2 = producto ofrecido
 				productsOffe.push(response2);
 				//$scope.product_offered = response2;
 			});
 			
 		}
 		/*
 		var result = productsReq.map(function(productsReq) {
 			return productsReq.reduce(function(result, field, index) {
 				result[productsOffe[index]] = field;
 				return result;
 			}, {});
 		});
 		*/
 		//var arrayCombined = $.map(productsReq, function(v, e) { return [v, productsOffe[e]]; });
 		//$scope.transactionsArray = transactions;
 		//la primera transaccion son el primero del primer array y el primero del segundo array
 		$scope.products_req = productsReq;
 		$scope.products_offe = productsOffe;
 		console.log($scope.products_req);
 		console.log($scope.products_offe);
 		//console.log($rootScope.transactions);

 	});

 	

 });
