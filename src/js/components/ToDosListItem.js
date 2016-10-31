import React from "react";

export default class ToDosListItem extends React.Component{
  constructor(){
    super();
    this.state = {
      isEditing: false,
    };
  }

  taskSection(){
    const {task, isDone} = this.props;
    const taskStyle = {
      color: isDone ? "green" : "red",
      cursor: "pointer"
    };
    if(this.state.isEditing){
      return (
        <td>
          <form onSubmit={this.onSave.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      );
    }
    return (
      <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
        {task}
      </td>
    );
  }

  actionSection(){
    if(this.state.isEditing){
      return (
        <td>
          <button onClick={this.onSave.bind(this)}>Save</button>
          <button onClick={this.onCancelEdit.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }

  onEditClick(){
    this.setState( {isEditing: true} );
  }

  onCancelEdit(){
    this.setState( {isEditing: false} );
  }

  onSave(event){
    event.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false})
  }

  render(){
    return(
      <tr>
        {this.taskSection()}
        {this.actionSection()}
      </tr>
    );
  }
}
