import React from 'react';
// import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import ".../../../node_modules/video-react/dist/video-react.css";
// import PropTypes from 'prop-types'


const VideoPlayer = ({ videoUrl }) => {
  return (
    <Player
      playsInline
      autoPlay
      src={videoUrl}
    />
  )
}

VideoPlayer.propTypes = {

}

export default VideoPlayer
