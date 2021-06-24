import React, { useEffect, useState } from 'react';
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import styles from "./style.module.css";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { addVidoes } from '../../features/videos/videosSlice';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

const VideoTrends = () => {
  // const category = useSelector((state) =>
  //   state.categories.data.find((cat) => cat.slug === "videos"))
  const [loading, setLoading] = useState(false);
  const videos = useSelector((state) => state.videos.data)
  const [recentVideo, setRecentVideo] = useState(null);
  const [allVideos, setAllVideos] = useState(null);
  const [perPage, setPerPage] = useState(15);

  const dispatch = useDispatch();
  
  const getVideos = async() => {
    setLoading(true);
    const res = await axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/videos?per_page=${perPage}`);
    dispatch(addVidoes(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const [recent, ...rest] = videos;
    setRecentVideo(recent);
    setAllVideos(rest)
  }, [videos]);

  return (
    <div className={`${styles.wrapper}`}>
      <h3>Trending Videos</h3>
      {loading && <Loader />}
      {recentVideo && (
        <VideoThumbnail 
          size="big"
          imageUrl={recentVideo.acf.thumbnail}
          dataId={recentVideo.id}
          path="videos"
        />
      )}
      <div className={`${styles.thumbnails}`}>
        <Grid container spacing={2} >
          {allVideos && allVideos.map((video) => (
            <Grid item md={6} xs={6} className={`${styles.item}`}>
              <VideoThumbnail 
                size="small"
                caption={video.title.rendered}
                curve={true}
                dataId={video.id}
                imageUrl={video.acf.thumbnail}
                path="videos"
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default VideoTrends;
