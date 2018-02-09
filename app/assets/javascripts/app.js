var app = angular.module('main', ['ngRoute','templates']);

app.config(['$locationProvider', '$httpProvider', '$routeProvider',
  function($locationProvider, $httpProvider, $routeProvider){

    $routeProvider.when('/', { templateUrl: 'views/public/_homepage.html', controller: 'MainCtrl' })
    .otherwise({ redirectTo: '/' });

  }]);
