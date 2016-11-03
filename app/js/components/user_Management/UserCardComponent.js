
import React from "react";
import style from "../../../css/style.js";


class UserCardComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  handleClick(){
    this.props.setCurrentUser(this.props.username);
  }

  render() {
    return (
      <div style={style.userCardLayout}
           title={"Click to open user session with " + this.props.username}
           onClick={this.handleClick.bind(this)}>
        <center>
          <img src="app/img/userIcon.png" width="50px" height="50px"
               style={{margin: "20px"}}/>
          <span style={{fontSize: "16px"}}>
            {" Username: " + this.props.username}
          </span>
        </center>
      </div>
    );
  }
}


module.exports = UserCardComponent;
