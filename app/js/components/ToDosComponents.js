import React from "react";

import Todo from "./Todo";
import ToDoActions from "../actions/ToDoActions";
import ToDoStore from "../stores/ToDoStore";
import GenerateToDo from "./GenerateToDo";
import style from "../../css/style.js";

class ToDosComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ToDoStore.getAll(),
    };
    this.getTodos = this.getTodos.bind(this);
  }

  componentWillMount(){
    ToDoStore.on("change", this.getTodos);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("change", this.getTodos);
  }

  getTodos(){
    this.setState({
      todos: ToDoStore.getAll(),
    });
  }

  reloadTodos(){
    ToDoActions.reloadTodos();
  }

  addTask(task){
    ToDoActions.createTodo(task);
  }

  deleteTask(id){
    ToDoActions.deleteTodo(id);
  }

  completeTask(id){
    ToDoActions.completeTodo(id);
  }

  editTask(oldTask, newTask){
    ToDoActions.editTodo(oldTask, newTask);
  }

  render(){
    const { todos } = this.state;
    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo} completeTask={this.completeTask.bind(this)}
                                             editTask={this.editTask.bind(this)}
                                             deleteTask={this.deleteTask.bind(this)} />;
    });

    return (
      <div>
      <button onClick={this.reloadTodos.bind(this)}>reload</button>
        <center>
          <img src="app/img/logo.png" width="130px" height="90px" />
          <GenerateToDo todos={this.state.todos} addTask={this.addTask.bind(this)} />
        </center>
        <div style={style.paper}>
          <div style={style.sideline}></div>
          <div style={style.paperContent}>
              {TodoComponents}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = (
  <ToDosComponents />
);
