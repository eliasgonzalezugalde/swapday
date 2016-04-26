'use strict';

/**
* @ngdoc function
* @name swapdayApp.controller:RegisterCtrl
* @description
* # RegisterCtrl
* Controller of the swapdayApp
*/
angular.module('swapdayApp')
.controller('RegisterCtrl', function ($scope, $http, $route, $location, $rootScope, Register) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.newRegister = function() {
    var newUser = $scope.user;
    Register.save({username: newUser.username, password: newUser.password, firstname: newUser.firstname},function(data) {
      $location.path('/login');
      $route.reload();
    }, function(error) {
      console.log('There was an error loading', error.statusText);
      console.log("Invalid User or Password!", error.mms, "error");
    });
  };

});
