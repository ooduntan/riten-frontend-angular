(function () {
  'use strict';
  angular.module('riten.controller', []);
  angular.module('riten.service', []);

  // All Service should be required here
  require('./service/user');

  // All Controller should be required here
  require('./controller/user');

  // Declare app level module which depends on views, and components
  angular.module('riten', [
    'ngResource',
    'ui.router',
    'riten.controller',
    'riten.service',
  ]).
    config(['$locationProvider', '$urlRouterProvider', '$stateProvider',
      function ($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider.html5Mode({ enabled: true, requireBase: false });

        $urlRouterProvider.otherwise('/');

        $stateProvider
          .state('home',
          {
            url: '/',
            controller: 'user',
            templateUrl: 'views/login.html'

          });
      }]);

} ());
