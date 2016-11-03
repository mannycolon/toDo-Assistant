import React from "react";

import ToDoActions from "../actions/ToDoActions";
import ToDoStore from "../stores/ToDoStore";
import Button  from 'react-bootstrap/lib/Button.js';
import Modal  from 'react-bootstrap/lib/Modal.js';
import style from "../../css/style.js";
import CreateToDoBook from "./CreateToDoBook";

class AppModal extends React.Component {
  constructor() {
    super();
    this.state = {
      visibleModal: false
    };
    this.updateLoginModal = this.updateLoginModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillMount(){
    ToDoStore.on("modalVisibility", this.openModal);
    ToDoStore.on("modalVisibility", this.updateLoginModal);
  }

  componentWillUnmount(){
    ToDoStore.removeListener("modalVisibility", this.openModal);
    ToDoStore.removeListener("modalVisibility", this.updateLoginModal);
  }

  updateLoginModal(){
    this.setState({visibleModal: ToDoStore.getModalVisibility()});
  }

  openModal(){
    console.log("open modal from open() from event noToDoBookFound");
    ToDoActions.setModalVisibility(true);
  }

  close(){
    ToDoActions.setModalVisibility(false);
    console.log("supposed to close modal now");
  }

  render(){
    const { visibleModal } = this.state;
    if(visibleModal === false){
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
