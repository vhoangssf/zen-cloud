import React from 'react';
import { Pagination } from 'react-bootstrap';

class PageSelect extends React.Component {
    render() {
      return (
        <Pagination
        prev
        next
        // first
        // last
        ellipsis
        boundaryLinks
        items={10}
        maxButtons={2}
        // activePage={this.state.activePage}
        // onSelect={this.handleSelect}
      />
      );
    }
}

export default PageSelect;
