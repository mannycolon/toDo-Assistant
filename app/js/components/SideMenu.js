import React from "react";

import style from "../../css/style.js";


class SideMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div style={style.SideMenu}>
        <center><h3 className="chalk">To-Dos Lists</h3></center>
      </div>
    );
  }
}

module.exports = SideMenu;
