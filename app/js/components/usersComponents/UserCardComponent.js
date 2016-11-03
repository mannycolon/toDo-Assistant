import React from "react";
import style from "./style.js";


class UserCardComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div style={style.layout}>
        <img src="app/img/userIcon.png" width="50px" height="50px" />
        <h5>{this.props.username}</h5>
      </div>
    );
  }
}


module.exports = UserCardComponent;
