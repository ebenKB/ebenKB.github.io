import React from 'react';
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import styles from "./style.module.css";
import { Grid } from "@material-ui/core";

const VideoTrends = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <h3>Trending Video</h3>
      <VideoThumbnail size="big" />
      <div className={`${styles.thumbnails}`}>
        <Grid container spacing={2} >
          <Grid item md={6} xs={6} className={`${styles.item}`}>
            <VideoThumbnail 
              size="small"
              caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              curve={true}
            />
          </Grid>
          <Grid item md={6} xs={6} className={`${styles.item}`}>
            <VideoThumbnail 
              size="small"
              caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              curve={true}
            />
          </Grid>
          <Grid item md={6} xs={6} className={`${styles.item}`}>
            <VideoThumbnail 
              size="small"
              caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              curve={true}
            />
          </Grid>        
            <Grid item md={6} xs={6} className={`${styles.item}`}>
              <VideoThumbnail 
                size="small"
                caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                curve={true}
              />
            </Grid>
            <Grid item md={6} xs={6} className={`${styles.item}`}>
              <VideoThumbnail 
                size="small"
                caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                curve={true}
              />
            </Grid>
            <Grid item md={6} xs={6} className={`${styles.item}`}>
              <VideoThumbnail 
                size="small"
                caption="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                curve={true}
              />
            </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default VideoTrends;
