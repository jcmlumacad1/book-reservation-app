import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import EditBookForm from './EditBookForm.js';

class EditBookModal extends React.Component {
  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>Edit book</ModalHeader>
          <ModalBody>
            <EditBookForm
              onSubmit={this.props.onSubmit}
              book={this.props.book}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default EditBookModal;