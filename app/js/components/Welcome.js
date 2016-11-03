import React from "react";

import ToDoStore from "../stores/ToDoStore";
import CreateNewUser from './user_Management/CreateNewUser.js';
import LoadUsers from './user_Management/LoadUsers.js';
import ToDosComponents from "./ToDosComponents";

var style = {
  box:{
    margin: "0px",
    marginTop: "20px",
    marginLeft: "15px",
    position: "relative",
    width: "400px",
    height: "504px",
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
      visible: true,
    };
    this.updateVisibility = this.updateVisibility.bind(this)
  }
  componentWillMount(){
    ToDoStore.on("currentUserUpdated", this.updateVisibility);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("currentUserUpdated", this.updateVisibility);
  }

  updateVisibility(){
    this.setState({visible: !this.state.visible});
  }

  render() {
    if(!this.state.visible){
      return (<div><ToDosComponents /></div>);
    }else{
      return (
        <div>
          <center>
            <h1 className="chalk" style={{color: "#A21E21", marginTop: "30px"}}>
              Welcome to ToDo Assistant
            </h1>
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
}

module.exports = (
  <Welcome />
);
