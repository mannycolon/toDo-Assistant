import React from "react";
import ToDoActions from "../actions/ToDoActions";
import ToDoStore from "../stores/ToDoStore";
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
    this.setState({ToDoBooksArray: ToDoStore.getAllToDoBooks()});
  }

  deleteToDoBook(ToDoBookName){
    ToDoActions.deleteToDoBook(ToDoBookName);
  }

  showCreateBookModal(){
    ToDoActions.setModalVisibility(true);
  }

  selectToDoBook(currentToDoBookName){
    ToDoStore.setCurrentToDoBook(currentToDoBookName);
  }

  render() {
    const { ToDoBooksArray } = this.state;//same as this.state.ToDoBooksArray
    if(ToDoBooksArray.length === 0){
      this.showCreateBookModal();
    }
      const ToDoBooks = ToDoBooksArray.map((ToDoBookName) => {
        const key = ToDoBooksArray.indexOf(ToDoBookName);
        return <ToDoBook key={key} ToDoBookName={ToDoBookName}
                selectToDoBook={this.selectToDoBook.bind(this)}
                deleteToDoBook={this.deleteToDoBook.bind(this)}/>;
      });
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
        <span style={{fontSize: "20px"}}>{this.props.ToDoBookName}</span>
        <br />
        <button style={style.deleteButton}
                onClick={this.props.deleteToDoBook.bind(this, this.props.ToDoBookName)}>
          Delete
        </button>
        <button style={style.openButton}
                onClick={this.props.selectToDoBook.bind(this, this.props.ToDoBookName)}>
          Open
        </button>
      </div>
    );
  }
}




module.exports = SideMenu;
