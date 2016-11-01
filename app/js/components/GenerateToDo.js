import React from "react";
import Glyphicon  from 'react-bootstrap/lib/Glyphicon.js';


class GenerateToDo extends React.Component{
  constructor(){
    super();
    this.state = {
      error: null
    };
  }

  handleNewToDo(event){
    event.preventDefault();
    const addToDoInput = this.refs.addToDoInput;
    const task = addToDoInput.value;
    const validateUserInput = this.validateUserInput(task);
    if(validateUserInput){
      this.setState({ error: validateUserInput});
      return;
    }
    this.setState({error: null});
    this.props.addTask(task);
    this.refs.addToDoInput.value = '';
  }

  validateUserInput(task){
    if(!task){
      return 'Please enter a task.';
    }else if(this.props.todos.find(todo => todo.task === task)) {
      return 'Task was previously created.';
    }else{
      return null;
    }
  }

  handleError(){
    if(!this.state.error) {return null;}
    return <div style={{color: "red"}}>{this.state.error}</div>;
  }

  render(){
    return(
      <form onSubmit={this.handleNewToDo.bind(this)}>
        <input type="text" placeholder="Add a item to your to-do list" ref="addToDoInput"/>
        <button><Glyphicon glyph="plus-sign" /></button>
        {this.handleError()}
      </form>
    );
  }
}

module.exports = GenerateToDo;
