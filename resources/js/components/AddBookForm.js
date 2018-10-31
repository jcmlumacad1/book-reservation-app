import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddBookForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <FormGroup>
          <Label for="addBookFormName">Name</Label>
          <Input type="text" name="addBookFormName" id="addBookFormName" />
        </FormGroup>
        <FormGroup>
          <Label for="addBookFormAuthor">Author</Label>
          <Input type="text" name="addBookFormAuthor" id="addBookFormAuthor" />
        </FormGroup>
        <FormGroup>
          <Label for="addBookFormDescription">Description</Label>
          <Input type="textarea" name="addBookFormDescription" id="addBookFormDescription" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}