import React from "react";

class ToDosListHeading extends React.Component{
  render(){
    return(
      <thead>
        <tr>
          <th>Task</th>
          <th>Action</th>
        </tr>
      </thead>
    );
  }
}

module.exports = ToDosListHeading;
