import React from "react";

export default class ToDosListItem extends React.Component{
  constructor(){
    super();
    this.state = {
      isEditing: false,
    };
  }
  renderActionSection(){
    if(this.state.isEditing){
      return (
        <td>
          <button onClick={this.onEditClick.bind(this)}>Save</button>
          <button onClick={this.onCancelEdit.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button>Delete</button>
      </td>
    );
  }

  onEditClick(){
    this.setState( {isEditing: true} );
  }

  onCancelEdit(){
    this.setState( {isEditing: false} );
  }

  render(){
    return(
      <tr>
        <td>{this.props.task}</td>
        {this.renderActionSection()}
      </tr>
    );
  }
}
