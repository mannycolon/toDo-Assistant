import React from "react";

//import ToDoActions from "../actions/ToDoActions";
//import ToDoStore from "../stores/ToDoStore";
import Button  from 'react-bootstrap/lib/Button.js';
import Modal  from 'react-bootstrap/lib/Modal.js';
import style from "../../css/style.js";


class CreateToDoBook extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleModal: false
    };
    this.updateLoginModal = this.updateLoginModal.bind(this);

  }

  componentWillMount(){
    ToDoStore.on("CreateToDoBookVisibility", this.updateLoginModal);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("CreateToDoBookVisibility", this.updateLoginModal);
  }

  updateLoginModal(){
    this.setState({visibleModal: TodoStore.getCreateToDoBookVisibility()});
  }

  close(){
    ToDoActions.CreateToDoBookVisibility(false);
  }

  handleToDoListNameError(){

  }

  render(){
    if(!this.state.visibleModal){
      return (<div></div>);
    }else{
      return(
        <div style={style.modal}>
          <Modal show={this.state.visibleModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Create ToDo Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <center>
              <img src="app/img/logo.png" width="160px" height="120px" style={{marginTop: "40px"}}/>
              <h4>Please create a new ToDo book</h4>
              <form onSubmit={this.handleNewUser.bind(this)}>
                <input type="text" placeholder="Please add new ToDo book name" ref="newToDoBookNameInput"
                       style={{width: "200px", marginBottom: "50px", marginTop: "10px", color: "#000"}}/>
                {this.handleToDoListNameError()}
                <button style={style.userButton} title="Click to create a new user">
                  Create ToDo Book
                </button>
              </form>
            </center>
            </Modal.Body>
            <Modal.Footer>
              <Button type={"button"} onClick={this.close.bind(this)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}

module.exports = CreateToDoBook;
