import React from 'react';
// import ReactPlayer from 'react-player'
import { Player } from 'video-react';
import ".../../../node_modules/video-react/dist/video-react.css";
// import PropTypes from 'prop-types'
import styles from "./style.module.css";


const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <>
      <div className={`${styles.video_wrapper}`}>
        <Player
          playsInline
          autoPlay
          src={videoUrl}
        />
        <h3 className={`font-bold ${styles.title}`} dangerouslySetInnerHTML={{__html: title}}/>
      </div>
      <div className={styles.video_wrapper_offset} />
    </>
  )
}

VideoPlayer.propTypes = {}

export default VideoPlayer
