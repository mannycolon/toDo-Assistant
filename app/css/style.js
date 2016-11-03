var style = {

  sideline:{
    content: '',
    position: "absolute",
    top: "0px", bottom: "0px", left: "0px",
    width: "60px",
    background: "radial-gradient(#575450 6px, transparent 7px) repeat-y",
    backgroundSize: "30px 30px",
    borderRight: "3px solid #D44147",
    boxSizing: "border-box",
  },

  paper:{
    margin: "10px",
    marginTop: "45px",
    position: "relative",
    width: "300px",
    height: "400px",
    background: "#fafafa",
    borderRadius: "10px",
    boxShadow: "0px 2px 8px rgba(0,0,0,.3)",
    overflow: "auto",
    display: "inline-block",
    textAlign: "left",
  },

  paperContent:{
    position: "absolute",
    top: "30px",
    right: "0px",
    bottom: "30px",
    left: "70px",
    backgroundSize: "30px 30px",
  },

  SideMenu:{
    backgroundColor: "#A21E21",
    height: "100vh",
    width: "210px",
    left: "70px",
    display: "inline-block",
    position: "fixed",
    zIndex: "99",
    fontSize: "12px",
    overflowY: "auto",
    color: "#FFF",
    padding: "15px",
  },

  SideBar:{
    backgroundColor: "#000",
    height: "100vh",
    width: "70px",
    marginLeft: "0px",
    left: "0px",
    display: "inline-block",
    position: "fixed",
    zIndex: "99",
    fontSize: "12px",
    overflowY: "hidden",
  },
  ul: {
      margin: "0px",
      padding: "0px",
  },
  li: {
    display: "block",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    color: "#FFF",
    cursor: "pointer",
    userSelect: "none",
  },
  liHover:{
    backgroundColor: "#FFF",
    color: "#A21E21",
    display: "block",
    textAlign: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    cursor: "pointer",
    userSelect: "none",
  },

  glyphicon: {
    fontSize: "16px",
    color: "#FFF",
  },

  glyphiconHover: {
    fontSize: "16px",
    color: "#A21E21",
  },

  SideBarUserIcon:{
    width: "30px",
    height: "30px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  imgHover:{
    backgroundColor: "#FFF",
    cursor: "pointer",
    alignContent: "center",
  },

  imgUnHover:{
    cursor: "pointer",
    alignContent: "center",
  },

};



module.exports = style;
