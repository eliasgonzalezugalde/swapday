'use strict';

/**
* @ngdoc function
* @name swapdayApp.controller:LoginCtrl
* @description
* # LoginCtrl
* Controller of the swapdayApp
*/
angular.module('swapdayApp')
.controller('LoginCtrl', function ($scope, $http, $route, $location, $rootScope, Session) {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.new = function() {
    var session = $scope.user;
    Session.save({username: session.username, password: session.password},function(data) {
      console.log(data.token); //token de usuario logueado
      console.log(data.id_user); //id de usuario logueado
      //$rootScope.user_id = data.id_user; //guardamos el id de user en una global --> no funcó
      localStorage.setItem('user_id', JSON.stringify(data.id_user)); //guardamos id de user en localStorage
      localStorage.setItem('token', JSON.stringify(data.token));
      $location.path('/');
      $route.reload();
    }, function(error) {
      console.log('There was an error loading', error.statusText);
      console.log("Invalid User or Password!", error.mms, "error");
    });
  };

});
