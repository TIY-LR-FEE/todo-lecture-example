import Todo from '../Todo';

class TodosController {
  constructor($stateParams, $http) {
    this._$http = $http;
    this.student = $stateParams.student;
    this.newTodo = "";
    this.todos = [];

    this.getTodos();
  }

  getTodos() {
    this._$http
      .get(`http://localhost:4000/api/todos?filter[where][student]=${this.student}`)
      .then((response) => {
        this.todos = response.data;
      });
  }

  addTodo() {
    this._$http.post(`http://localhost:4000/api/todos`,
      {
        item: this.newTodo,
        student: this.student,
        completed: false
      })
      .then((response) => {
        // console.log(response);
        let todo = new Todo(response.data);
        this.todos.push(todo);
        this.newTodo = "";
      })
      .catch((error) => {
        console.log("Error! " + error);
      });

  }

  toggleCompleted(todo) {
    this._$http
      .put(`http://localhost:4000/api/todos/${todo.id}`, {
        completed: !todo.completed
      })
      .then((response) => {
        todo.completed = response.data.completed;
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }

  todoCount() {
    return this.todos.filter((todo) => todo.completed === false).length;
  }

  deleteTodo(todo) {
    let confirmed = confirm(`Are you sure you want to delete this todo: ${todo.item}`);

    if (confirmed) {
      this._$http
        .delete(`http://localhost:4000/api/todos/${todo.id}`)
        .then((response) => {
          this.todos.splice(this.todos.indexOf(todo), 1);
        });
    }
  }

}

export default TodosController;
