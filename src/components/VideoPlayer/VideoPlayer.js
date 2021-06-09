import React from 'react';
import ReactPlayer from 'react-player'
// import PropTypes from 'prop-types'

const VideoPlayer = props => {
  return (
    <ReactPlayer 
      url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      width='100%'
      // height='100%'
    />
  )
}

VideoPlayer.propTypes = {

}

export default VideoPlayer
