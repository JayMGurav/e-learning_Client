import React from 'react';
import { Video } from 'cloudinary-react';

const VideoPlayer = (props) => {
  return (
    <Video
      cloudName={props.cloudName}
      publicId={props.publicId}
      width="100%"
      height="100%"
      fluid="true"
      preload="auto"
      alt="hello"
      onContextMenu={(e) => {
        e.preventDefault();
        return false;
      }}
      controls={true}
      controlsList="nodownload"
      sourceTypes={['m3u8', 'mp4', 'webm']}
      colors={{ base: '#f28705', accent: '#f28705', text: '#fff' }}
    />
  );
};
export default VideoPlayer;
