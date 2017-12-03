import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class SortResults extends React.Component {
  render() {
    return (
      <FormGroup controlId="formControlsSelect">
      <FormControl componentClass="select" placeholder="Sort results by">
        <option value="AtoZ">A to Z</option>
        <option value="other">...</option>
      </FormControl>
      </FormGroup>
    );
  }
}

export default SortResults;
