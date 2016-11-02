import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import fs from "fs-extra";
import readJSON from "utils-fs-read-json";
import path from 'path';
/*
this.todos = [
  {
    id: 113464613,
    text: "Go Shopping",
    complete: false
  },
  {
    id: 235684679,
    text: "Pay Water Bill",
    complete: false
  },
];

*/

class ToDoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = this.readData();
  }

  readData(){
    var file = './localStore/data2.json';
    var data = readJSON.sync( file, 'utf8' );

    return data;
  }

  saveData(){
    var file = './localStore/data2.json';
    let data = this.todos;
    fs.outputJson(file, data, function (err) {
      console.log(err) // => null
      fs.readJson(file, function(err, data) {
        console.log(data);//will be removed
      })
    })
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
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
