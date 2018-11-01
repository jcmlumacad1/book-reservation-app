import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class EditBookForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Input type="hidden" name="editBookFormId" id="editBookFormId" readOnly value={this.props.book.id} />
        <FormGroup>
          <Label for="editBookFormName">Name</Label>
          <Input type="text" name="editBookFormName" id="editBookFormName" defaultValue={this.props.book.name} />
        </FormGroup>
        <FormGroup>
          <Label for="editBookFormAuthor">Author</Label>
          <Input type="text" name="editBookFormAuthor" id="editBookFormAuthor" defaultValue={this.props.book.author} />
        </FormGroup>
        <FormGroup>
          <Label for="editBookFormDescription">Description</Label>
          <Input type="textarea" name="editBookFormDescription" id="editBookFormDescription" value={this.props.book.description} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}