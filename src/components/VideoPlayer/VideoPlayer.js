import React from 'react';
import ReactPlayer from 'react-player'
// import PropTypes from 'prop-types'

const VideoPlayer = ({ videoUrl }) => {
  return (
    <ReactPlayer 
      url={videoUrl}
      width='100%'
      autoPlay
    />
  )
}

VideoPlayer.propTypes = {

}

export default VideoPlayer
