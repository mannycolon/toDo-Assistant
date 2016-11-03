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
    console.log(this.state.ToDoBooksArray);
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

  showCreateBookModal(){
    ToDoActions.setModalVisibility(true);
  }

  render() {
    const { ToDoBooksArray } = this.state;//same as this.state.ToDoBooksArray
    if(ToDoBooksArray.length === 0){
      console.log("loading modal");
      this.showCreateBookModal();
    }
      const ToDoBooks = ToDoBooksArray.map((ToDoBookName) => {
        const key = ToDoBooksArray.indexOf(ToDoBookName);
        return <ToDoBook key={key} ToDoBookName={ToDoBookName} />;
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
}




module.exports = SideMenu;
