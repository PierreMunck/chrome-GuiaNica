(function(){ 'use strict';

require.config({ 
  baseUrl: '/js',
  paths: {
    jQuery: '../lib/jquery/jquery.min',
    angular: '../lib/angular/angular.min',
    controllers: 'controllers',
  },
  shim: {
    'jQuery': {
      exports : 'jQuery'
    },
    'angular': {
      deps: ['jQuery'],
      exports : 'angular'
    }
  }
});

require([
    'jQuery',
    'angular',
    'controllers/main'
  ],
  function($, angular) {
    angular.bootstrap(document, ['guianicaApp']);
  });

})();