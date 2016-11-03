import React from "react";


class LoadUsers extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: ToDoStore.getAllUserNames(),
    };
  }

  render() {
    const { users } = this.state;
    const userCards = users.map((user) => {
        const key = users.indexOf(user);
        return <UserCardComponent key={key} username={user} />;
    });
    return (
      <div>
        {userCards}
      </div>
    );
  }
}


module.exports = LoadUsers;
