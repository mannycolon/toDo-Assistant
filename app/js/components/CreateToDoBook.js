import React from "react";
import ToDoActions from "../actions/ToDoActions";
import ToDoStore from "../stores/ToDoStore";
import Button from 'react-bootstrap/lib/Button.js';
import Glyphicon from 'react-bootstrap/lib/Glyphicon.js';
import Modal  from 'react-bootstrap/lib/Modal.js';
import style from "../../css/style.js";


class CreateToDoBook extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null
    };
  }

  handleNewToDoBook(event){
    event.preventDefault();
    const newToDoBookInput = this.refs.newToDoBookInput;
    const newToDoBook = newToDoBookInput.value.toLowerCase();
    const validatedNewToDoBookMsg = ToDoStore.getValidatedNewToDoBook(newToDoBook);
    if(validatedNewToDoBookMsg){
      this.setState({error: validatedNewToDoBookMsg});
      this.refs.newToDoBookInput.value = '';
      return;
    }
    this.setState({ error: null});
    ToDoActions.createNewToDoBook(newToDoBook);
    this.refs.newToDoBookInput.value = '';
    this.props.closeModal();
  }

  handleToDoListNameError(){
    if(!this.state.error) {return null;}
    return <div style={{color: "#A21E21", fontSize: "18px"}}>
            <Glyphicon glyph="warning-sign" />
            {this.state.error}
          </div>;
  }

  render(){
      return(
        <div style={{color: "#FFF"}}>
            <center>
              <img src="app/img/logo.png" width="160px" height="120px"
                   style={{marginTop: "40px"}}/>
              <h4>Please create a new ToDo book</h4>
              <h5>
                What is a ToDo Book?
              </h5>
              <p>
                A ToDoBook is a collection of to-do list category.<br/>
                <span style={{color: "#158d44"}}>e.g. Shopping List, Grocery List.</span>
              </p>
              <form onSubmit={this.handleNewToDoBook.bind(this)}>
                <input type="text" placeholder="Please add new ToDo book name"
                       ref="newToDoBookInput" style={style.inputBox}/>
                {this.handleToDoListNameError()}
                <button style={style.userButton} title="Click to create a new user">
                  Create ToDo Book
                </button>
              </form>
            </center>
        </div>
      );
    }
}

module.exports = CreateToDoBook;
