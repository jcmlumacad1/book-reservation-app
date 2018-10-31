import React, { Component } from 'react';
import BookList from './components/BookList.js';
import ViewBookModal from './components/ViewBookModal.js';
import AddBookModal from './components/AddBookModal.js';
import EditBookModal from './components/EditBookModal.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      books: [
        {
          id: '1',
          name: 'Book1',
          author: 'Author1',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt modi amet, ducimus sit hic excepturi rerum molestiae, tempora aliquam officiis maiores magnam debitis earum atque! Assumenda nihil in facere recusandae.',
        },
        {
          id: '2',
          name: 'Book2',
          author: 'Author2',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt modi amet, ducimus sit hic excepturi rerum molestiae, tempora aliquam officiis maiores magnam debitis earum atque! Assumenda nihil in facere recusandae.',
        },
        {
          id: '3',
          name: 'Book3',
          author: 'Author3',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt modi amet, ducimus sit hic excepturi rerum molestiae, tempora aliquam officiis maiores magnam debitis earum atque! Assumenda nihil in facere recusandae.',
        },
      ],
      activeBook: {},
      activeBookToEdit: {},
      addBookModal: false,
      editBookModal: false,
    }

    this.toggle = this.toggle.bind(this);
  }

  toggleAddBookModal() {
    this.setState({
      addBookModal: !this.state.addBookModal
    });
  }

  toggleEditBookModal(id) {
    this.setState({
      editBookModal: !this.state.editBookModal
    });

    if (id !== undefined) {
      const newArrayOfBooks = [...this.state.books];
      for (const book of newArrayOfBooks) {
        if (book.id === id) {
          this.setState({
            activeBookToEdit: book
          });
          break;
        }
      }
    }
  }

  toggle(id) {
    this.setState({
      modal: !this.state.modal
    });

    if (id !== undefined) {
      const newArrayOfBooks = [...this.state.books];
      for (const book of newArrayOfBooks) {
        if (book.id === id) {
          this.setState({
            activeBook: book
          });
          break;
        }
      }
    }
  }

  handleClick(type, id) {
    if (type === 'EditBookModal') {

    }
  }

  handleAddBookFormSubmit(event) {
    event.preventDefault();
    const newArrayOfBooks = [...this.state.books];
    const newBook = {
      id: Date.now() + event.target.addBookFormName.value,
      name: event.target.addBookFormName.value,
      author: event.target.addBookFormAuthor.value,
      description: event.target.addBookFormDescription.value,
    };
    newArrayOfBooks.push(newBook);
    this.setState({
      books: newArrayOfBooks
    });

    this.toggleAddBookModal();
  }

  render() {
    return (
      <div>
        <h1>
          Book Borrowing System
          {/* <Button color="primary">Add Book</Button> */}
        </h1>
        <AddBookModal
          buttonLabel='Add Book'
          onSubmit={this.handleAddBookFormSubmit.bind(this)}
          toggle={this.toggleAddBookModal.bind(this)}
          modal={this.state.addBookModal}
        />
        <BookList
          toggle={this.toggle}
          books={this.state.books}
          toggleEditBookModal={this.toggleEditBookModal.bind(this)}
        />
        <ViewBookModal
          toggle={this.toggle}
          state={this.state}
        />
        <EditBookModal
          toggle={this.toggleEditBookModal.bind(this)}
          modal={this.state.editBookModal}
          book={this.state.activeBookToEdit}
        />
      </div>
    );
  }
}

export default App;
