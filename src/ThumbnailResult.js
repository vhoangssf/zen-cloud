import React from 'react';
import { Thumbnail } from 'react-bootstrap';

class ThumbnailResult extends React.Component {
    render() {
      return (
        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>

        </p>
      </Thumbnail>
      );
    }
}

export default ThumbnailResult;
