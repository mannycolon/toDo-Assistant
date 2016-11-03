import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import fs from "fs-extra";
import readJSON from "utils-fs-read-json";
import path from 'path';


class ToDoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = this.readData();
  }

  readData(){
    var file = './localStore/data.json';
    var data = readJSON.sync( file, 'utf8' );
    if(Array.isArray(data)){
      return data;
    }else{
      data = [];
    }
    return data;
  }

  saveData(){
    var file = './localStore/data.json';
    let data = this.todos;
    fs.outputJson(file, data, function (err) {
      err ? console.log(err) : console.log("saved succesfully");
      fs.readJson(file, function(err, data) {
      })
    })
  }

  getAll() {
    return this.todos;
  }

  getAllUserNames() {
    return "this.todos.allusersnmaes";
  }

  getValidatedUsername(username){
    //TODO:  Need to work on this code NOT DONE YET
    if(!username){
      return ' Please enter an username.';
    }else if (username == usernamesInStorage) {
      return "username already exists";
    }else{
      return null;
    }
  }

  createNewUsername(newUsername){
    //TODO:  Need to work on this code NOT DONE YET
    let newUserNameObj = new Object();
    newUserNameObj.username = newUsername;
    //initiating the todoLists array
    newUserNameObj.todoLists = [];
    console.log(newUserNameObj);
    this.todos.push(newUserNameObj);
    console.log(this.todos);
  }

  createTodo(task) {
    const id = Date.now();
    this.todos.push({
      id,
      task,
      isDone: false,
    });
    this.saveData();
    this.emit("change");
  }

  deleteTodo(idToDelete){
    const foundTodo = this.todos.find(todo => todo.id === idToDelete);
    this.todos.splice( this.todos.indexOf(foundTodo), 1 );
    this.saveData();
    this.emit("change");
  }

  completeTodo(id){
    //using the find() method to find the first element in
    //the array that satisfies the callback (es6 arrrow function)
    const foundTodo = this.todos.find(todo => todo.id === id);
    foundTodo.isDone = !foundTodo.isDone;
    this.saveData();
    this.emit("change");
  }

  editTodo(oldTask, newTask){
    const foundTodo = this.todos.find(todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.saveData();
    this.emit("change");
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.task);
        break;
      }
      case "DELETE_TODO": {
        this.deleteTodo(action.id);
        break;
      }
      case "COMPLETE_TODO": {
        this.completeTodo(action.id);
        break;
      }
      case "EDIT_TODO": {
        this.editTodo(action.oldTask, action.newTask);
        break;
      }
      case "CREATE_NEWUSER": {
        this.createNewUsername(action.username);
        break;
      }
      //WILL PROBABLY REMOVE BELOW
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

module.exports = todoStore;
