import React from "react";
import ToDosList from "./ToDosList";
import GenerateToDo from "./GenerateToDo";
import style from "../../css/style.js";
import fs from "fs";

const todos = [
  {
    task: "make todo list app",
    isDone: true
  },
  {
    task: " Dhariany",
    isDone: false
  },
  {
    task: "make my bed",
    isDone: true
  },
  {
    task: "create a new app",
    isDone: false
  },
  {
    task: "call mom",
    isDone: true
  }

];

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todos: todos,
    };
  }
  addTask(task){
    this.state.todos.push({
      task: task,
      isDone: false
    });
    this.setState({ todo: this.state.todos });
  }
  toggleTask(task){
    //using the find() method to finde the first element in
    //the array that satisfies the callback (es6 arrrow function)
    const foundTodo = this.state.todos.find(todo => todo.task === task);
    foundTodo.isDone = !foundTodo.isDone;
    this.setState({ todos: this.state.todos });
  }
  saveTask(oldTask, newTask){
    const foundTodo = this.state.todos.find(todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskToDelete){
    const foundTodo = this.state.todos.find(todo => todo.task === taskToDelete);
    this.state.todos.splice( this.state.todos.indexOf(foundTodo), 1 );
    this.setState({ todos: this.state.todos });
  }

  saveJson(){
    fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

  }



  render(){
    return(
      <div>
      <center><h1 onClick={this.saveJson.bind(this)}>ToDo Assistant</h1>
      <GenerateToDo todos={this.state.todos} addTask={this.addTask.bind(this)}/>
      </center>

      <div style={style.paper}>
        <div style={style.sideline}></div>
        <div style={style.paperContent}>
        <ToDosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />

        </div>
      </div>

      </div>
    );
  }
}
