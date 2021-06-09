import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import styles from "./style.module.css";

const StoryItem = props => {
  return (
    <div className={`${styles.wrapper}`}>
      <Grid container style={{width: '100%'}}>
        <Grid md={12} item style={{width: "100%"}}>
          <VideoThumbnail />
          {/* <video controls width="100%" height="auto" style={{maxWidth: "100%", borderRadius: "10px"}}>
            <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
              type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
          </video> */}
        </Grid>
      </Grid>
      <Grid className="mt-2">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis assumenda ipsa</p>
      </Grid>
    </div>
  )
}

StoryItem.propTypes = {

}

export default StoryItem
