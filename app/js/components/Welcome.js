import React from "react";
import ReactDOM from 'react-dom';
import ToDoStore from "../stores/ToDoStore";
import CreateNewUser from './user_Management/CreateNewUser.js';
import LoadUsers from './user_Management/LoadUsers.js';
import ToDosComponents from "./ToDosComponents";
import style from "../../css/style.js";

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
    ToDoStore.on("returnToWelcomePage", this.updateVisibility);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("currentUserUpdated", this.updateVisibility);
    ToDoStore.removeListener("returnToWelcomePage", this.updateVisibility);
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

ReactDOM.render(<Welcome />, document.getElementById('content'));
