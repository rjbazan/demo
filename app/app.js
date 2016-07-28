'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'demoApp.stubs'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main-section></main-section>'
      })
      .when('/about', {
        templateUrl: 'components/main-section/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
