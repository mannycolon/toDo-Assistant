import React from "react";
import Glyphicon  from 'react-bootstrap/lib/Glyphicon.js';


class ToDos extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isEditing: false,
    };
  }

  taskSection(){
    const { isDone, edit, task } = this.props;
    const taskStyle = {
      color: isDone ? "#158d44" : "#A21E21",
      textDecoration: isDone ? "line-through" : "none",
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
          <td style={{paddingLeft: "10px"}}>
            <div onClick={this.onSave.bind(this)} title="Save changes"
                 style={{display: "inline-block", cursor: "pointer"}}>
              <Glyphicon glyph="floppy-saved"
                         style={{marginLeft: "5px", color: "#158d44"}}/>
            </div>
            <div onClick={this.onCancelEdit.bind(this)} title="Cancel changes"
                 style={{display: "inline-block", cursor: "pointer"}}>
              <Glyphicon glyph="floppy-remove"
                         style={{marginLeft: "5px", color: "red"}}/>
            </div>
          </td>
      );
    }
    return (
        <td style={{paddingLeft: "10px"}}>
          <div onClick={this.props.deleteTask.bind(this, this.props.id)}
               title="Delete Task" style={{display: "inline-block", cursor: "pointer"}}>
            <Glyphicon glyph="trash"
                       style={{marginLeft: "5px"}}/>
          </div>
          <div onClick={this.props.completeTask.bind(this, this.props.id)}
               title="Complete Task" style={{display: "inline-block", cursor: "pointer"}}>
            <Glyphicon glyph="ok"
                       style={{marginLeft: "5px", color:"green"}}/>
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
    this.props.editTask(oldTask, newTask);
    this.setState({ isEditing: false})
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
           {this.taskSection()}
           {this.actionSection()}
          </tr>
        </tbody>
      </table>
    );
  }
}


module.exports = ToDos;
