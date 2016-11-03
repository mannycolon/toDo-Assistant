import React from "react";


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
    if(!this.state.error) {return null;}
    return <div style={{color: "#A21E21"}}>
            <Glyphicon glyph="warning-sign" />
            {this.state.error}
          </div>;
  }


  render() {
    return (
      <div>
        <center>
          <img src="app/img/logo.png" width="160px" height="120px" />
          <h4>Please create a new user</h4>
          <form onSubmit={this.handleNewUser.bind(this)} className="pull-right">
            <input type="text" placeholder="Please type an username" ref="newUserNameInput"/>
            {this.handleUsernameError()}
            <button>Create User</button>
          </form>
        </center>
      </div>
    );
  }
}


module.exports = CreateNewUser;
