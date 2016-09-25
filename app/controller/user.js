(function () {
  'use strict';

  angular.module('riten.controller', [])
    .controller('user', ['$scope', 'userService',
      function ($scope, userService) {
        $scope.scopeTester = 'testing the';
        console.log(userService, 'knknknknnkknkn');
      }
    ]);
} ());