import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class DisplayAmount extends React.Component {
  render() {
    return (
      <FormGroup controlId="formControlsSelect">
      <FormControl componentClass="select" placeholder="120 per page">
        <option value="120">120 per page</option>
        <option value="200">200 per page</option>
      </FormControl>
    </FormGroup>
    );
  }
}

export default DisplayAmount;
