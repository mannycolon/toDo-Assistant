import React from "react";
import ToDosList from "./ToDosList";
import GenerateToDo from "./GenerateToDo";

const todos = [
  {
    task: "make todo list app",
    isDone: true
  },
  {
    task: "kiss Dhariany",
    isDone: false
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
  render(){
    return(
      <div>
        <h1>React Todos App</h1>
        <GenerateToDo addTask={this.addTask.bind(this)}/>
        <ToDosList todos={this.state.todos}/>
      </div>
    );
  }
}
