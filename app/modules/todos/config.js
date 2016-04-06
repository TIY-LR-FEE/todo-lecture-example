function config($stateProvider) {
  $stateProvider
    .state('todolist', {
      url: '/todos',
      controller: 'TodoListController as listCtrl',
      template: require('./views/todolist.html')
    })
    .state('todos', {
      url: '/todos/:student',
      controller: 'TodosController as todosCtrl',
      template: require('./views/todos.html')
    });
}

export default config;
