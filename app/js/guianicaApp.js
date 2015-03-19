define(
[
  'angular',
], 
function(angular) { 'use strict';

return angular.module('guianicaApp',[]).
    config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/main');
      $stateProvider.state(
        'main', 
        { 
          url: '/main',
          templateUrl: 'templates/main.tpl.html',
          controller: 'mainController'
        }
      );
    });
});