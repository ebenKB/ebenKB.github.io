import React, { useEffect } from 'react';
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import styles from "./style.module.css";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { addVidoes } from '../../features/videos/videosSlice';
import axios from 'axios';

const VideoTrends = () => {
  // const category = useSelector((state) =>
  //   state.categories.data.find((cat) => cat.slug === "videos"))
  const videos = useSelector((state) => state.videos.data)

  const dispatch = useDispatch();
  
  const getVideos = async() => {
    const res = await axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/videos`);
    dispatch(addVidoes(res.data))
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <h3>Trending Video</h3>
      <VideoThumbnail size="big" />
      <div className={`${styles.thumbnails}`}>
        <Grid container spacing={2} >
          {videos.map((video) => (
            <Grid item md={6} xs={6} className={`${styles.item}`}>
              <VideoThumbnail 
                size="small"
                caption={video.title.rendered}
                curve={true}
                dataId={video.id}
                imageUrl={video.acf.thumbnail}
              />
            </Grid>
          ))}
          {/* <Grid item md={6} xs={6} className={`${styles.item}`}>
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
            </Grid> */}
        </Grid>
      </div>
    </div>
  )
}

export default VideoTrends;
