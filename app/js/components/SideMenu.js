import React from "react";
import ToDoActions from "../actions/ToDoActions";
import ToDoStore from "../stores/ToDoStore";
import style from "../../css/style.js";


class SideMenu extends React.Component {

  deleteToDoBook(ToDoBookName){
    ToDoActions.deleteToDoBook(ToDoBookName);
  }

  selectToDoBook(currentToDoBookName){
    ToDoStore.setCurrentToDoBook(currentToDoBookName);
  }

  render() {
    const { toDoBooksNamesArray } = this.props;//same as this.state.ToDoBooksArray
      const ToDoBooks = toDoBooksNamesArray.map((toDoBookName) => {
        const key = toDoBooksNamesArray.indexOf(toDoBookName);
        return <ToDoBook key={key} toDoBookName={toDoBookName}
                selectToDoBook={this.selectToDoBook.bind(this)}
                deleteToDoBook={this.deleteToDoBook.bind(this)}/>;});
    return (
      <div style={style.SideMenu}>
        <center><h3 className="chalk">ToDo Books</h3></center>
        {ToDoBooks}
      </div>
    );
  }
}

class ToDoBook extends React.Component {
  render() {
    return (
      <div style={style.ToDoBook}>
        <span style={{fontSize: "20px"}}>{this.props.toDoBookName}</span>
        <br />
        <button style={style.deleteButton}
                onClick={this.props.deleteToDoBook.bind(this, this.props.toDoBookName)}>
          Delete
        </button>
        <button style={style.openButton}
                onClick={this.props.selectToDoBook.bind(this, this.props.toDoBookName)}>
          Open
        </button>
      </div>
    );
  }
}




module.exports = SideMenu;
