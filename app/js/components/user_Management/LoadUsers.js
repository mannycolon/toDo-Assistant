import React from "react";

import ToDoStore from "../../stores/ToDoStore";
import UserCardComponent from "./UserCardComponent.js";


class LoadUsers extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: ToDoStore.getAllUserNames(),
    };
    this.getUsers = this.getUsers.bind(this);
  }

  componentWillMount(){
    ToDoStore.on("newUser", this.getUsers);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("newUser", this.getUsers);
  }

  getUsers(){
    this.setState({
      users: ToDoStore.getAllUserNames(),
    });
  }

  setCurrentUser(username){
    ToDoStore.setCurrentUserInStore(username);
    console.log(username);
  }

  render() {
    const { users } = this.state;
    const userCards = users.map((user) => {
        const key = users.indexOf(user);
        return <UserCardComponent key={key} username={user}
                                  setCurrentUser={this.setCurrentUser.bind(this)}/>;
    });
    return (
      <div>
        {userCards}
      </div>
    );
  }
}


module.exports = LoadUsers;
