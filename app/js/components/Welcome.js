import React from "react";

import CreateNewUser from './user_Management/CreateNewUser.js';
import LoadUsers from './user_Management/LoadUsers.js';

var style = {
  box:{
    margin: "0px",
    marginTop: "50px",
    marginLeft: "15px",
    position: "relative",
    width: "400px",
    height: "500px",
    background: "#000000",
    boxShadow: "0 15px 10px #777",
    overflow: "auto",
    display: "inline-block",
    textAlign: "left",
    color: "#FFFFFF"
  },

}

class Welcome extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <center>
          <div style={style.box}>
            <CreateNewUser />
          </div>
          <div style={style.box}>
            <LoadUsers />
          </div>
        </center>
      </div>
    );
  }
}

module.exports = (
  <Welcome />
);
