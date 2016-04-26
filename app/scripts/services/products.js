'use strict';

/**
* @ngdoc service
* @name swapdayApp.products
* @description
* # products
* Service in the swapdayApp.
*/

angular.module('swapdayApp')
.factory('Products', function ($resource) {
  return $resource('http://localhost:3000/products/');
});

angular.module('swapdayApp')
.factory('NewProduct', function ($resource) {
  return $resource('http://localhost:3000/products/');
});

/*
angular.module('swapdayApp')
.service('Products', function ($resource) {
return $resource('http://localhost:3000/products/:id');
});
*/
