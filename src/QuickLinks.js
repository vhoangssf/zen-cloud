import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class QuickLinks extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem header="Most Watched">
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </ListGroupItem>
        <ListGroupItem header="Newest Uploads">
          <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </ListGroupItem>
        <ListGroupItem header="Recommended">
        <ol>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </ListGroupItem>
    </ListGroup>
    );
  }
}

export default QuickLinks;
