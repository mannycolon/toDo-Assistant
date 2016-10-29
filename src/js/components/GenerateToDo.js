import React from "react";

export default class GenerateToDo extends React.Component{
  handleNewToDo(event){
    event.preventDefault();
    this.props.addTask(this.refs.addToDoInput.value);
    this.refs.addToDoInput.value = '';
  }

  render(){
    return(
      <form onSubmit={this.handleNewToDo.bind(this)}>
        <input type="text" placeholder="Add a item to your to-do list" ref="addToDoInput"/>
        <button>Add</button>
      </form>
    );
  }
}
