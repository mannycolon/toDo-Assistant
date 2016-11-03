
import React from "react";

var style = {
  layout:{
    display: "inline-block",
    width: "50%",
    height: "150px",
    padding: "20px",
    border: "1px solid #000",
    backgroundColor: "#158d44",
    cursor: "pointer",
  }
}
class UserCardComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div style={style.layout} title="Click to select user">
        <center>
          <img src="app/img/userIcon.png" width="50px" height="50px" style={{margin: "20px"}}/>
          <span style={{fontSize: "16px"}}>{" Username: " + this.props.username}</span>
        </center>
      </div>
    );
  }
}


module.exports = UserCardComponent;
