import React from 'react';
import { Well } from 'react-bootstrap';
import Filter from './Filter';
import filterData from './filterData.json';
import _ from 'lodash';

class ListFilter extends React.Component {
  render() {
   let filters = _.map(filterData.filters, (data) => {
     return <Filter filter={data} key={data.name}/>;
   });


    return (
      <Well>
        { filters }
      </Well>
    );
  }
}

export default ListFilter;
