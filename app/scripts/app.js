'use strict';

/**
* @ngdoc overview
* @name swapdayApp
* @description
* # swapdayApp
*
* Main module of the application.
*/
angular
.module('swapdayApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
])

.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/myproducts', {
    templateUrl: 'views/myproducts.html',
    controller: 'MyproductsCtrl',
    controllerAs: 'myproducts'
  })
  .when('/transactions', {
    templateUrl: 'views/transactions.html',
    controller: 'TransactionsCtrl',
    controllerAs: 'transactions'
  })
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .when('/register', {
    templateUrl: 'views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .when('/newproduct', {
    templateUrl: 'views/newproduct.html',
    controller: 'NewproductCtrl',
    controllerAs: 'newproduct'
  })
  .when('/product/:id', {
    templateUrl: 'views/product.html',
    controller: 'ProductCtrl',
    controllerAs: 'product'
  })
  .when('/productedit/:id', {
    templateUrl: 'views/productedit.html',
    controller: 'ProducteditCtrl',
    controllerAs: 'productedit'
  })
  .when('/newtransaction/:id', {
    templateUrl: 'views/newtransaction.html',
    controller: 'NewtransactionCtrl',
    controllerAs: 'newtransaction'
  })
  .otherwise({
    redirectTo: '/'
  });
});

angular
.module('swapdayApp')
.factory('httpRequestInterceptor', function ($rootScope, $q, $window) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.localStorage.token) {
        debugger;
        config.headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem("token"));
        console.log('Bearer ' + JSON.parse(localStorage.getItem("token")));
        console.log("hola");
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
      } else {
        console.log("hola");
      }
      return response || $q.when(response);
    }
  };

});