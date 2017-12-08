import React from 'react';
import Video from './Video';
import videoData from './videoData.json';
import _ from 'lodash';

class VideoList extends React.Component {
  render() {
    let videos = _.map(videoData.videos, (data) => {
      return <Video Video={data} key={data.name}/>;
    });

     return (
       <div>
         { videos }
       </div>
     );
   }

    // render() {
    //   return (
    //     <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
    //     <h3>Thumbnail label</h3>
    //     <p>Description</p>
    //     <p>

    //     </p>
    //   </Thumbnail>
    //   );
    // }
}

export default VideoList;
