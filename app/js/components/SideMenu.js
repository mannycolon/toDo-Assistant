import React from "react";

import style from "../../css/style.js";


class SideMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      ToDoBooksArray: ToDoStore.getAllToDoBooks(),
    };
    this.getToDoBooks = this.getToDoBooks.bind(this);
  }

  componentWillMount(){
    ToDoStore.on("newTodoBook", this.getToDoBooks);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("newTodoBook", this.getToDoBooks);
  }

  getToDoBooks(){
    this.setState({
      ToDoBooks: ToDoStore.getAllToDoBooks(),
    });
  }

  render() {
    const { ToDoBooksArray } = this.state;//same as this.state.ToDoBooksArray
    const ToDoBooks = ToDoBooksArray.map((ToDoBookName) => {
        const key = ToDoBooksArray.indexOf(ToDoBookName);
        return <UserCardComponent key={key} ToDoBookName={ToDoBookName} />;
    });


    return (
      <div style={style.SideMenu}>
        <center><h3 className="chalk">To-Dos Lists</h3></center>
        {ToDoBooks}
      </div>
    );
  }
}

class ToDoBook extends React.Component {
  render() {
    return (
      <div style={style.ToDoBook}>
        <h3>{this.props.ToDoBookName}</h3>
      </div>
    );
  }




module.exports = SideMenu;
