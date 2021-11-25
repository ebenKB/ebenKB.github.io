import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import PropTypes from 'prop-types'
import StoryItem from '../StoryItem/StoryItem';
import { Divider, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { addVidoes } from '../../features/videos/videosSlice';
import { getTrimmedText } from '../../utils/app';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const LatestVideos = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const videos = useSelector((state) => state.videos.data);
  const [latestVideo, ...otherRecentVideos] = videos;

  const getLatestVideos = async () => {
    setLoading(true);
    const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/videos?_embed&per_page=5`);
    dispatch(addVidoes(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getLatestVideos();
  }, [])

  return (
    <div className="text-xs wrapper mt-5">
      <h3 style={{marginBottom: "8px"}} className="text-gray-700 font-bold">Latest Videos</h3>
      <div className="story-item_wrapper">
        {loading && <Loader />}
        {latestVideo && (
          <div className="item">
            <StoryItem 
              slug={latestVideo.slug} 
              imageUrl={latestVideo.acf.thumbnail} 
              title={getTrimmedText(latestVideo.title.rendered)}
              path="videos"
            />
          </div>
        )}
      </div>
      <Divider style={{marginBottom: "20px"}}/>
        {loading && <Loader />}
        <Grid container spacing={2}>
          {otherRecentVideos && otherRecentVideos.map((video) => (
            <Grid item xs={6}>
              <Link to={`/videos/${video.slug}`} className="App-link">
                <VideoThumbnail
                  size="small"
                  caption={getTrimmedText(video.title.rendered, 20)}
                  curve={true}
                  dataId={video.slug}
                  imageUrl={video.acf.thumbnail}
                  path="videos"
                />
              </Link>
            </Grid>
          ))}
        </Grid>
    </div>
  )
}

LatestVideos.propTypes = {}

export default LatestVideos
