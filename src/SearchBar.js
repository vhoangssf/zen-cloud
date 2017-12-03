import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class SearchBar extends React.Component {
    render() {
      return (
      <Form inline>
      <FormGroup controlId="formInlineName">
        <FormControl type="text" placeholder="Search" />
      </FormGroup>
      <Button type="submit">
        Go
      </Button>
    </Form>
      );
    }
}

export default SearchBar;
