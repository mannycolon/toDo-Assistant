import React from "react";

import style from "../../css/style.js";
import Glyphicon  from 'react-bootstrap/lib/Glyphicon.js';

class SideBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      imgHover: false
    };
  }

  click(){

  }

  hover(){
    this.setState({imgHover: true});
  }

  unHover(){
    this.setState({imgHover: false});
  }

  render() {
    const linkStyle = this.state.imgHover ? style.imgHover : style.imgUnHover;

    return (
      <div style={style.SideBar}>
        <ul style={style.ul}>
          <div style={linkStyle} onMouseEnter={this.hover.bind(this)}
               onMouseLeave={this.unHover.bind(this)} title="Switch user">
            <center>
            <img src="app/img/userIcon.png"
                style={style.SideBarUserIcon} />
            </center>
          </div>
          <SideBarButton handleButtonClick={this.click.bind(this)}
                         value={"New List"} glyphicon="list-alt" title={"Create new list"}/>
          <SideBarButton handleButtonClick={this.click.bind(this)}
                         value={"Delete List"} glyphicon="trash" title={"Delete a list"}/>
        </ul>
      </div>
    );
  }
}

class SideBarButton extends React.Component {
  constructor(){
    super();
    this.state ={
      hover: false,
    }
  }

  mouseEnter(){
    this.setState({hover: true});
  }

  mouseLeave(){
    this.setState({hover: false});
  }
  render() {
    const linkStyle = this.state.hover ? style.liHover : style.li;
    const GlyphStyle = this.state.hover ? style.glyphiconHover : style.glyphicon;
    return (
      <li style={linkStyle} onClick={this.props.handleButtonClick}
          onMouseEnter={this.mouseEnter.bind(this)}
          onMouseLeave={this.mouseLeave.bind(this)} title={this.props.title}>
        <Glyphicon glyph={this.props.glyphicon} style={GlyphStyle}/><br/>
        {this.props.value}
      </li>
    );
  }
}

module.exports = SideBar;
