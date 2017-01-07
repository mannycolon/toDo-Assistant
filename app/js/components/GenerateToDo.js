import React from "react";
import ToDoActions from "../actions/ToDoActions";
import Glyphicon  from 'react-bootstrap/lib/Glyphicon.js';
import style from "../../css/style.js";


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
      return ' Please enter a task.';
    }else if(this.props.todos.find(todo => todo.task === task)) {
      return ' Task was previously created.';
    }else{
      return null;
    }
  }

  handleError(){
    if(!this.state.error) {return null;}
    return <div style={{color: "#A21E21"}}>
            <Glyphicon glyph="warning-sign" />
            {this.state.error}
          </div>;
  }


  render(){
    if(!this.props.currentToDoBookName){
      return (
        <div style={{margin: "0px", border: "1px solid #158d44", padding: "15px", height: "150px", borderLeft: "none", borderRight: "none"}}>
          <div style={{color: "#158d44"}}>
            <Glyphicon glyph="info-sign" style={{color: "#158d44", fontSize: "24px"}}/>
            Please create or select a ToDo book to start adding tasks
          </div>
        </div>
      );
    }else{
      return(
        <center>
        <form onSubmit={this.handleNewToDo.bind(this)}>
          <span className="chalk" style={{margin: "40px", color: "#7F142A"}}>Current ToDoBook: {this.props.currentToDoBookName}</span>
          <br />
          <input type="text" placeholder=" Add new item to your to-do list"
                 ref="addToDoInput" style={style.taskInputBox}/>
          <button style={style.inputButton} title="Add new to-do">
            <Glyphicon glyph="plus-sign" style={{color: "#FFFFFF"}}/>
          </button>
          {this.handleError()}
        </form>
        </center>
      );
    }
  }
}

module.exports = GenerateToDo;
