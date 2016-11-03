import React from "react";

import ToDoActions from "../../actions/ToDoActions";
import ToDoStore from "../../stores/ToDoStore";
import Glyphicon  from 'react-bootstrap/lib/Glyphicon.js';
import style from "../../../css/style.js";


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
    const username = newUserNameInput.value.toLowerCase();
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
    if(!this.state.error) {return null;}
    return <div style={{color: "#A21E21", fontSize: "18px"}}>
            <Glyphicon glyph="warning-sign" />
            {this.state.error}
          </div>;
  }


  render() {
    return (
      <div>
        <center>
          <img src="app/img/logo.png" width="160px" height="120px"
               style={{marginTop: "40px"}}/>
          <h4>Please create a new user</h4>
          <form onSubmit={this.handleNewUser.bind(this)}>
            <input type="text" placeholder="Please enter an username"
                   ref="newUserNameInput" style={style.inputBox}/>
            {this.handleUsernameError()}
            <button style={userButton} title="Click to create a new user">
              Create User
            </button>
          </form>
        </center>
      </div>
    );
  }
}


module.exports = CreateNewUser;
