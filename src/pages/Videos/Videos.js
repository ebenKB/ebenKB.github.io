import React, { useEffect, useState } from 'react';
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import styles from "./style.module.css";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import { addVidoes } from '../../features/videos/videosSlice';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import { getTrimmedText } from '../../utils/app';
import ReactGA from "react-ga4";
import {Helmet} from "react-helmet";
import PageHeader from "../../components/PageHeader/PageHeader"
import FixedLoader from '../../components/FixedLoader/FixedLoader';
import { THEME } from '../../utils/constants';
import HeroText from '../../components/HeroText/HeroText';
import { formatDistance } from 'date-fns';

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

  // useEffect(() => {
  //   ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search})
  // }, []);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const [recent, ...rest] = videos;
    setRecentVideo(recent);
    console.log("REcent video ", recent)
    setAllVideos(rest)
  }, [videos]);

  return (
    <>
      <Helmet>
        <title>MTN Herritage App | Videos</title>
        <meta name="title" content="MTN Heritage App Videos" />
        <meta name="description" content="MTN Heritage app Videos" />
        <meta name="keywords" content="MTN Heritage, MTN app, Heritage videos, heritage app" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className={`${styles.wrapper}`}>
        <PageHeader render={() => (
          <h3>Latest Videos</h3>
        )} />
        {loading && <FixedLoader />}
        {recentVideo && (
          <VideoThumbnail 
            size="big"
            imageUrl={recentVideo.acf.thumbnail}
            dataId={recentVideo.slug}
            path="videos"
            // embed_caption={getTrimmedText(recentVideo.title.rendered)}
            embed_caption=""
            curve={false}
          />
        )}
        {/* {recentVideo && <div className={styles.carousel_title} dangerouslySetInnerHTML={{__html: getTrimmedText(recentVideo.title.rendered)}} />} */}
        {recentVideo && (
          <HeroText 
            text={getTrimmedText(recentVideo.title.rendered, 100)} 
            caption={`Published ${formatDistance(new Date(recentVideo.date), new Date())} ago`} 
          />
        )}
        <div className={`${styles.thumbnails}`}>
          <Grid container spacing={2}>
            {allVideos && allVideos.map((video) => (
              <Grid item md={12} xs={12} className={`${styles.item}`}>
                <VideoThumbnail
                  size="big"
                  caption={video.title.rendered}
                  curve={false}
                  dataId={video.slug}
                  imageUrl={video.acf.thumbnail}
                  path="videos"
                  theme={THEME.DARK}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}

export default VideoTrends;
