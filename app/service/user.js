(function () {
  'use strict';

  angular.module('riten.service')
    .factory('userService', ['$resource',
      function ($resource) {
        return $resource('api/riten/user', { id: '@id' },
          {
            update: {
              method: 'PUT'
            }
          }
        );
      }
    ]);

} ());