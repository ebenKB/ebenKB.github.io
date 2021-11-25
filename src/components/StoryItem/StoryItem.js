import React from 'react';
// import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import styles from "./style.module.css";

const StoryItem = ({ slug, imageUrl, type, title, path="articles" }) => {
  return (
    <div className={`${styles.wrapper}`}>
        <>        
        <Grid container style={{width: '100%'}}>
          <Grid md={12} item style={{width: "100%"}}>
            <VideoThumbnail 
              dataId={slug} 
              imageUrl={imageUrl}
              type={type}
              path={path}
              // dataId={story.id} 
              // imageUrl={story._embedded["wp:featuredmedia"] && story._embedded["wp:featuredmedia"][0].source_url} 
              // type={story._embedded["wp:featuredmedia"] && story._embedded["wp:featuredmedia"][0].media_type}
            />
          </Grid>
        </Grid>
        <Grid className="mt-2">
          <p className="font-bold" dangerouslySetInnerHTML={{__html: title }} />
        </Grid>
        </>
    </div>
  )
}

StoryItem.propTypes = {

}

export default StoryItem
