import React from "react";

//import ToDoActions from "../actions/ToDoActions";
//import ToDoStore from "../stores/ToDoStore";
import Button  from 'react-bootstrap/lib/Button.js';
import Modal  from 'react-bootstrap/lib/Modal.js';
import style from "../../css/style.js";


class AppModal extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleModal: false
    };
    this.updateLoginModal = this.updateLoginModal.bind(this);
    this.open = this.open.bind(this);
  }

  componentWillMount(){
    ToDoStore.on("noToDoBookFound", this.open);
    ToDoStore.on("modalVisibility", this.updateLoginModal);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("noToDoBookFound", this.open);
    ToDoStore.removeListener("modalVisibility", this.updateLoginModal);
  }

  updateLoginModal(){
    this.setState({visibleModal: TodoStore.getModalVisibility()});
  }

  open(){
    this.setState({visibleModal: true);
  }

  close(){
    ToDoActions.modalVisibility(false);
  }

  render(){
    if(!this.state.visibleModal){
      return (<div></div>);
    }else{
      return(
        <div style={style.modal}>
          <Modal show={this.state.visibleModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton style={{backgroundColor: "#333333", color: "#FFFFFF"}}>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: "#333333"}}>
              <CreateToDoBook closeModal={this.close.bind(this)}/>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: "#333333"}}>
              <Button bsStyle="danger" type={"button"} onClick={this.close}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}

module.exports = AppModal;
