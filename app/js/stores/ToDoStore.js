import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import fs from "fs-extra";
import readJSON from "utils-fs-read-json";
import path from 'path';


class ToDoStore extends EventEmitter {
  constructor() {
    super()
    this.appData = this.readData();
    this.currentTodos = this.getCurrentTasks();
    this.currentUser = null;
    this.currentToDoBook = null;
    this.modalVisibility = null;
  }

  readData(){
    let file = './localStore/data.json';
    let data = readJSON.sync( file, 'utf8' );
    if(Array.isArray(data)){
      return data;
    }else{
      data = [];
    }
    return data;
  }

  saveData(){
    let file = './localStore/data.json';
    let data = this.appData;
    fs.outputJson(file, data, function (err) {
      err ? console.log(err) : console.log("data saved succesfully");
      fs.readJson(file, function(err, data) {
      })
    })
  }

  getAll() {
    return this.currentTodos;
  }

  getValidatedUsername(newUsername){
    let foundUsername;
    if(this.appData.length !== 0){
      foundUsername = this.appData.find(user => user.username === newUsername);
    }
    if(!newUsername){
      return ' Please enter username.';
    }else if (foundUsername && foundUsername.username === newUsername) {
      return " This username already exists";
    }else{
      return null;
    }
  }

  createNewUsername(newUsername){
      let newUserNameObj = new Object();
      newUserNameObj.username = newUsername;
      //initiating the todoLists array
      newUserNameObj.toDoLists = [];
      this.appData.push(newUserNameObj);
      this.setCurrentUserInStore(newUserNameObj.username);
      this.saveData();
      this.emit("newUser");
  }

  setCurrentUserInStore(username){
    this.currentUser = username;
    this.emit("currentUserUpdated");
  }

  getAllUserNames() {
    const foundAllUsernames = [];
    let dataArray = this.appData;
    for(let element in dataArray){
      foundAllUsernames.push(dataArray[element].username);
    }
    return foundAllUsernames;
  }
  getCurrentUser(){
    return this.currentUser;
  }

  getValidatedNewToDoBook(newToDoBookName){
    let foundUser;
    let foundToDoBookName;
      if(this.appData.length !== 0){
        foundUser = this.appData.find(users => users.username === this.currentUser);
        foundToDoBookName = foundUser.toDoLists.find(
          toDoListsElement => toDoListsElement.toDoListName === newToDoBookName
        );
      }
      if(!newToDoBookName){
        return ' Please enter a ToDoBook name.';
      }else if(foundToDoBookName && foundToDoBookName.toDoListName === newToDoBookName){
        return " This ToDoBook name already exists in your list of ToDoBooks";
      }else{
        return null;
      }
  }

  createNewToDoBook(newToDoBookName){
    const foundUser = this.appData.find(users => users.username === this.currentUser);
    let newToDoListObj = new Object();
    newToDoListObj.toDoListName = newToDoBookName;
    newToDoListObj.tasks = [];
    foundUser.toDoLists.push(newToDoListObj);
    this.emit("newTodoBook");
    this.setCurrentToDoBook(newToDoListObj.toDoListName);
    this.saveData();
  }

  deleteToDoBookInStore(ToDoBookToDel){
    const foundUser = this.appData.find(users => users.username === this.currentUser);
    const foundToDoList = foundUser.toDoLists.find(
                toDoListsElement => toDoListsElement.toDoListName === ToDoBookToDel);
    foundUser.toDoLists.splice(foundUser.toDoLists.indexOf(foundToDoList), 1);
    this.emit("newTodoBook");
    this.saveData();
  }

  setCurrentToDoBook(currentToDoBook){
    this.currentToDoBook = currentToDoBook;
    this.emit("currentToDoBookUpdated");
  }

  getCurrenToDoBook(){
    return this.currentToDoBook;
  }

  getAllToDoBooks(){
    let foundAllToDoBooks = [];
    const foundUser = this.appData.find(users => users.username === this.currentUser);
    const foundToDoLists = foundUser.toDoLists;
    for(let element in foundToDoLists){
      foundAllToDoBooks.push(foundToDoLists[element].toDoListName);
    }
    return foundAllToDoBooks;
  }

  getCurrentTasks(){
    let foundTasks = [];
    if(this.currentUser){
      const foundUser = this.appData.find(users => users.username === this.currentUser);
      if(this.currentToDoBook){
        const foundToDoBookName = foundUser.toDoLists.find(toDoBooks => toDoBooks.toDoListName === this.currentToDoBook);
        foundTasks =  foundToDoBookName.tasks;
      }
    }
    return foundTasks;
  }

  getModalVisibility(){
    return this.modalVisibility;
  }

  setModalVisibilityInStore(visibility){
    this.modalVisibility = visibility;
    this.emit("modalVisibility");
  }

  goBackToWelcomePage(){
    this.currentUser = null;
    this.currentToDoBook = null;
    this.modalVisibility = null;
    this.emit("returnToWelcomePage");
  }

  createTodo(task) {
    let foundToDoLists;
    const id = Date.now();
    const foundUser = this.appData.find(users => users.username === this.currentUser);
    foundToDoLists = foundUser.toDoLists.find(
                toDoListsElement => toDoListsElement.toDoListName === this.currentToDoBook);
    foundToDoLists.tasks.push({
      id,
      task,
      isDone: false,
    });
    this.saveData();
    this.emit("change");
  }

  deleteTodo(idToDelete){
    const foundUser = this.appData.find(users => users.username === this.currentUser);
    const foundToDoLists = foundUser.toDoLists.find(
                toDoListsElement => toDoListsElement.toDoListName === this.currentToDoBook);
    const foundTasks =  foundToDoLists.tasks;
    const foundTodo = foundTasks.find(todo => todo.id === idToDelete);
    foundTasks.splice( foundTasks.indexOf(foundTodo), 1 );
    this.saveData();
    this.emit("change");
  }

  completeTodo(id){
    const foundUser = this.appData.find(users => users.username === this.currentUser);
    const foundToDoLists = foundUser.toDoLists.find(
                toDoListsElement => toDoListsElement.toDoListName === this.currentToDoBook);
    const foundTaks =  foundToDoLists.tasks;
    const foundTodo = foundTaks.find(todo => todo.id === id);
    foundTodo.isDone = !foundTodo.isDone;
    this.saveData();
    this.emit("change");
  }

  editTodo(oldTask, newTask){
    const foundUser = this.appData.find(users => users.username === this.currentUser);
    const foundToDoLists = foundUser.toDoLists.find(
                toDoListsElement => toDoListsElement.toDoListName === this.currentToDoBook);
    const foundTaks =  foundToDoLists.tasks;
    const foundTodo = foundTaks.find(todo => todo.task === oldTask);
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
      case "CREATE_NEW_TODOBOOK": {
        this.createNewToDoBook(action.newToDoBook);
        break;
      }
      case "DELETE_TODOBOOK": {
        this.deleteToDoBookInStore(action.ToDoBookToDelete);
        break;
      }
      case "MODAL_VISIBILITY": {
        this.setModalVisibilityInStore(action.visibility);
        break;
      }
    }
  }

}

const todoStore = new ToDoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

module.exports = todoStore;
