import React from "react";
import Glyphicon  from 'react-bootstrap/lib/Glyphicon.js';


class ToDosListItem extends React.Component{
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
      fontSize: "18px",
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
      <td style={taskStyle} onClick={this.onEditClick.bind(this)}>
        {task}
      </td>
    );
  }

  actionSection(){
    if(this.state.isEditing){
      return (
        <td>
          <button onClick={this.onSave.bind(this)} title="Save changes">Save</button>
          <button onClick={this.onCancelEdit.bind(this)} title="Cancel changes">Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <div onClick={this.props.deleteTask.bind(this, this.props.task)} title="Delete Task">
          <Glyphicon glyph="remove-circle"
                     style={{float: "left", marginLeft: "5px"}}
          />
        </div>
        <div onClick={this.props.toggleTask.bind(this, this.props.task)} title="Complete Task">
          <Glyphicon glyph="ok-circle" style={{float: "left", marginLeft: "5px", color:"green"}}/>
        </div>
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

module.exports = ToDosListItem;
