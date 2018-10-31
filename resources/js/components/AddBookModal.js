import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddBookForm from './AddBookForm.js';

class AddBookModal extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.props.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>Add book</ModalHeader>
          <ModalBody>
            <AddBookForm
              onSubmit={this.props.onSubmit}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AddBookModal;