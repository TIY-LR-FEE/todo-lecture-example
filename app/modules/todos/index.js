import angular from 'angular';

import config from './config';

import todosController from './controllers/todos';
import todoListController from './controllers/todolist';

let todos = angular.module('tiy.todos', []);

todos.config(config);
todos.controller('TodosController', todosController);
todos.controller('TodoListController', todoListController);

export default todos;
