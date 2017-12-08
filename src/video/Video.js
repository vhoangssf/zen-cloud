import React from 'react';
import { Thumbnail} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import _ from 'lodash';

class Video extends React.Component {
  render() {
    // let descriptions = _.map(this.props.video.descriptions, (desc) => {
    //   return <Thumbnail key={ desc }>{ desc }</Thumbnail>;
    // });
    return (
      <div>
        {/* <b>{ this.props.video.name }</b> */}
           {/* { descriptions } */}
          <Thumbnail>Video</Thumbnail>
      </div>
    );
  }
}

export default Video;

Video.propTypes = {
  video: PropTypes.object
};
