import React from "react";
import ToDosListHeading from "./ToDosListHeading";
import ToDosListItem from "./ToDosListItem";

export default class ToDosList extends React.Component{
  getToDosListItems(){
    let tasks = this.props.todos;
    return tasks.map((todo, index) => <ToDosListItem key={index}
                                                    task={todo.task}
                                                    isDone={todo.isDone}
                                                    toggleTask={this.props.toggleTask}
                                                    saveTask={this.props.saveTask}
                                                    deleteTask={this.props.deleteTask}
                                      />);
  }

  render(){
    return(
        <table>
          <ToDosListHeading />
          <tbody>
            {this.getToDosListItems()}
          </tbody>
        </table>
    );
  }
}
