import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class EditBookForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <FormGroup>
          <Label for="editBookFormName">Name</Label>
          <Input type="text" name="editBookFormName" id="editBookFormName" />
        </FormGroup>
        <FormGroup>
          <Label for="editBookFormAuthor">Author</Label>
          <Input type="text" name="editBookFormAuthor" id="editBookFormAuthor" />
        </FormGroup>
        <FormGroup>
          <Label for="editBookFormDescription">Description</Label>
          <Input type="textarea" name="editBookFormDescription" id="editBookFormDescription" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}