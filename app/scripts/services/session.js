'use strict';

/**
* @ngdoc service
* @name swapdayApp.session
* @description
* # session
* Service in the swapdayApp.
*/

angular.module('swapdayApp')
.factory('Session', function ($resource) {
  return $resource('http://localhost:3000/sessions/');
});
