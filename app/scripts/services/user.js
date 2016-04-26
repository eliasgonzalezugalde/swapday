'use strict';

/**
* @ngdoc service
* @name swapdayApp.user
* @description
* # user
* Service in the swapdayApp.
*/
angular.module('swapdayApp')
.factory('User', function ($resource) {
  return $resource('http://localhost:3000/sessions/authenticate/');
});

angular.module('swapdayApp')
.factory('Register', function ($resource) {
  return $resource('http://localhost:3000/users/');
});
