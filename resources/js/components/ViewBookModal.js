import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const ViewBookModal = (props) => {
    if (props.state.activeBook !== {}) {
        const book = props.state.activeBook;
        return (
            <Modal isOpen={props.state.modal} toggle={props.toggle}>
                <ModalHeader toggle={props.toggle}>
                    <div>Name: {book.name}</div>
                    <div>Author: {book.author}</div>
                </ModalHeader>
                <ModalBody>
                    {book.description}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
};

export default ViewBookModal;