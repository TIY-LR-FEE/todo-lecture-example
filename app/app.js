import angular from 'angular';
import uiRouter from 'angular-ui-router';

import todos from './modules/todos';

let App = angular.module('app', [
  'ui.router',

  'tiy.todos'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/todos");
}

App.config(config);
