import React, { Component } from 'react';
import {
    Button,
  } from 'reactstrap';

const BookList = (props) => {

    const renderBookListItem = (book) => {
        return (
        <li key={book.id}>
            {book.name}
            <Button color="primary" onClick={() => props.toggle(book.id)}>View</Button>
            <Button color="success" onClick={() => props.toggleEditBookModal(book.id)}>Edit</Button>
            <Button color="danger" onClick={() => props.toggleDeleteBookModal(book.id)}>Delete</Button>
        </li>
        );
    }
    
    function renderBookList() {
        return props.books.map(renderBookListItem);
    }

    return (
        <ul>
            { renderBookList() }
        </ul>
    );
}

export default BookList;