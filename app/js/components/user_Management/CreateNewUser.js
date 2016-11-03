import React from "react";

import ToDoActions from "../../actions/ToDoActions";
import ToDoStore from "../../stores/ToDoStore";
import Glyphicon  from 'react-bootstrap/lib/Glyphicon.js';

var userButton = {
  backgroundColor: "#158d44",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  marginTop: "40px",
  marginBottom: "40px",
  display: "block",
}

class CreateNewUser extends React.Component {
  constructor(props) {
    super();
    this.state = {
      error: null
    };
  }

  handleNewUser(event){
    event.preventDefault();
    const newUserNameInput = this.refs.newUserNameInput;
    const username = newUserNameInput.value;
    const validatedUsername = ToDoStore.getValidatedUsername(username);
    if(validatedUsername){
      this.setState({error: validatedUsername});
      this.refs.newUserNameInput.value = '';
      return;
    }
    this.setState({ error: null});
    ToDoActions.createNewUsername(username);
    this.refs.newUserNameInput.value = '';
  }

  handleUsernameError(){
    if(!this.state.error) {return <div>{" "}</div>;}
    return <div style={{color: "#A21E21"}}>
            <Glyphicon glyph="warning-sign" />
            {this.state.error}
          </div>;
  }


  render() {
    return (
      <div>
        <center>
          <img src="app/img/logo.png" width="160px" height="120px" style={{marginTop: "40px"}}/>
          <h4>Please create a new user</h4>
          <form onSubmit={this.handleNewUser.bind(this)}>
            <input type="text" placeholder="Please type an username" ref="newUserNameInput"
                   style={{width: "200px", marginBottom: "50px", marginTop: "10px", color: "#000"}}/>
            {this.handleUsernameError()}
            <button style={userButton}>Create User</button>
          </form>
        </center>
      </div>
    );
  }
}


module.exports = CreateNewUser;
