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
    return(
      <form onSubmit={this.handleNewToDo.bind(this)}>
        <input type="text" placeholder=" Add new item to your to-do list"
               ref="addToDoInput" style={{width: "300px", borderStyle: "solid",
               borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px",
               height: "31px", borderColor: "#7F142A"}}/>
        <button style={{backgroundColor: "#158d44", border: "none",
                borderTopRightRadius: "4px", borderBottomRightRadius: "4px",
                borderColor: "#158d44", borderStyle: "solid"}}
                title="Add new to-do">
          <Glyphicon glyph="plus-sign" style={{color: "#FFFFFF"}}/>
        </button>
        {this.handleError()}
      </form>
    );
  }
}

module.exports = GenerateToDo;
