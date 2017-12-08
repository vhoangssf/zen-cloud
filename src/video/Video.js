import React from 'react';
import { Thumbnail, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import _ from 'lodash';

class Video extends React.Component {
  render() {
    // let descriptions = _.map(this.props.Video.descriptions, (desc) => {
    //   return <Thumbnail key={ desc }>{ desc }</Thumbnail>;
    // });
    // console.log('hit', this.props.Video.descriptions);
    return (
      <Thumbnail>
        <h3>{ this.props.Video.name }</h3>
        <p>
          <b>Teacher: </b>{this.props.Video.teacher}
        <br />
          <b>Language: </b>{this.props.Video.language}
        </p>
        <p>
          <b>Description: </b>{this.props.Video.descriptions}
        </p>
        <p>
          <Button bsStyle="primary">Watch</Button>&nbsp;
        </p>
      </Thumbnail>
    );
  }
}

export default Video;

Video.propTypes = {
  Video: PropTypes.object
};
