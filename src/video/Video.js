import React from 'react';
import { Thumbnail} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import _ from 'lodash';

class Video extends React.Component {
  render() {
    // let descriptions = _.map(this.props.Video.descriptions, (desc) => {
    //   return <Thumbnail key={ desc }>{ desc }</Thumbnail>;
    // });
    // console.log('hit', this.props.Video.descriptions);
    return (
      <div>
        <b>{ this.props.Video.name }{this.props.Video.descriptions}</b>
           {/* { descriptions } */}
          {/* <Thumbnail>Video</Thumbnail> */}
      </div>
    );
  }
}

export default Video;

Video.propTypes = {
  Video: PropTypes.object
};
