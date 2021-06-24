import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import styles from "./style.module.css";

const StoryItem = ({ story }) => {
  return (
    <div className={`${styles.wrapper}`}>
      {story && (
        <>        
        <Grid container style={{width: '100%'}}>
          <Grid md={12} item style={{width: "100%"}}>
            <VideoThumbnail 
              dataId={story.id} 
              imageUrl={story._embedded["wp:featuredmedia"][0].source_url} 
              type={story._embedded["wp:featuredmedia"][0].media_type}
            />
            {/* <video controls width="100%" height="auto" style={{maxWidth: "100%", borderRadius: "10px"}}>
              <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
                type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video> */}
          </Grid>
        </Grid>
        {story && (
          <Grid className="mt-2">
            <p dangerouslySetInnerHTML={{__html: story.title.rendered}} />
          </Grid>
        )}
        </>
      )}
    </div>
  )
}

StoryItem.propTypes = {

}

export default StoryItem
