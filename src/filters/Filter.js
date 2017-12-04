import React from 'react';
import { Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Filter extends React.Component {
  render() {
    let options = _.map(this.props.filter.options, (opt) => {
      return <Checkbox key={ opt }>{ opt }</Checkbox>;
    });
    return (
      <div>
        <b>{ this.props.filter.name }</b>
          { options }
      </div>
    );
  }
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.object
};
