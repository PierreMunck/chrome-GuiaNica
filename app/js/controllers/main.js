define(
'controllers/main',
[
  'jQuery',
  'angular',
  'guianicaApp'
], 

function($, guianicaApp) { 'use strict';
/*
* Application controller.
*/
var MainController = function($scope) {

  $scope.node = []; // All node
  
  // Auto add showing bookmarks when user scroll to page down

  // Key down events handlers
  $('#mainContent').keydown(function(e) {
    var updated = false;
    alert(e.which);
    if (e.which === 13) { // Enter press on page - go to the selected bookmark
      //TODO
    } else if (e.which === 37) { // left arrow key
      //TODO
    } else if (e.which === 39) { // right arrow key
      //TODO
    } else if (e.which === 9 && e.shiftKey) { // shift+tab key
      //TODO
    } else if (e.which === 9) { // tab key
      //TODO
    }
  });

  var loadNodes = function() {
    //TODO get json info
  }.bind(this);
  loadNodes();

};

guianicaApp.controller('mainController', ['$scope', MainController]);

});

