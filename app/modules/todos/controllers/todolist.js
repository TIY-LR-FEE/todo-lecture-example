class TodoListController {
  constructor($http, $state) {
    this._$http = $http;
    this._$state = $state;
    this.students = [];
    this.newListName = "";
    this.getStudents();
  }

  getStudents() {
    this._$http
      .get(`http://localhost:4000/api/todos?filter[order]=student`)
      .then((response) => {
        response.data.forEach((todo) => {
          if (this.students.indexOf(todo.student) === -1) {
            this.students.push(todo.student);
          }
        });
      });
  }

  redirectToList() {
    this._$state.go('todos', { student: this.newListName });
  }
}

export default TodoListController;
