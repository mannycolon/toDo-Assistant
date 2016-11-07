import React from "react";

import ToDoActions from "../actions/ToDoActions";
import ToDoStore from "../stores/ToDoStore";

import SideBar from "./SideBar";
import SideMenu from "./SideMenu";
import AppModal from "./AppModal";
import GenerateToDo from "./GenerateToDo";
import Todo from "./Todo";
import style from "../../css/style.js";

class ToDosComponents extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ToDoStore.getCurrentTasks(),
      toDoBooksNamesArray: ToDoStore.getAllToDoBooks(),
      currentToDoBookName: null,
    };
    this.getTodos = this.getTodos.bind(this);
    this.getCurrenToDoBook = this.getCurrenToDoBook.bind(this);
    this.getToDoBooks = this.getToDoBooks.bind(this);
  }

  componentWillMount(){
    ToDoStore.on("change", this.getTodos);
    ToDoStore.on("currentToDoBookUpdated", this.getCurrenToDoBook);
    ToDoStore.on("newTodoBook", this.getToDoBooks);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("change", this.getTodos);
    ToDoStore.removeListener("currentToDoBookUpdated", this.getCurrenToDoBook);
    ToDoStore.removeListener("newTodoBook", this.getToDoBooks);
  }

  getToDoBooks(){
    this.setState({toDoBooksNamesArray: ToDoStore.getAllToDoBooks()});
  }

  getTodos(){
    this.setState({
      todos: ToDoStore.getCurrentTasks(),
    });
  }

  getCurrenToDoBook(){
    this.setState({currentToDoBookName: ToDoStore.getCurrenToDoBook()});
    this.getTodos();
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
      while(!todo.isDone){
        return <Todo key={todo.id} {...todo} completeTask={this.completeTask.bind(this)}
                                             editTask={this.editTask.bind(this)}
                                             deleteTask={this.deleteTask.bind(this)} />;
      }
    });
    const DoneTasks = todos.map((todo) => {
      while(todo.isDone){
        return <Todo key={todo.id} {...todo} completeTask={this.completeTask.bind(this)}
                                             editTask={this.editTask.bind(this)}
                                             deleteTask={this.deleteTask.bind(this)} />;
      }
    });
    return (
      <div style={{paddingLeft: "280px"}}>
        <SideBar />
        <SideMenu toDoBooksNamesArray={this.state.toDoBooksNamesArray}/>
        <AppModal />
        <center>
          <img src="app/img/logo.png" width="130px" height="90px" style={{margin: "20px"}}/>
          <GenerateToDo todos={this.state.todos} addTask={this.addTask.bind(this)}
                          currentToDoBookName={this.state.currentToDoBookName}/>
          <div style={style.paper}>
            <div style={style.sideline}></div>
            <div style={style.paperContent}>
              <span className="chalk" style={{color: "#A21E21", fontSize: "26px"}}>
              To Dos
              </span>
              {TodoComponents}
            </div>
          </div>
          <div style={style.paper}>
            <div style={style.sideline}></div>
            <div style={style.paperContent}>
              <span className="chalk" style={{color: "#158d44", fontSize: "26px"}}>
                Done Tasks
              </span>
              {DoneTasks}
            </div>
          </div>
        </center>
      </div>
    );
  }
}

module.exports = ToDosComponents;
