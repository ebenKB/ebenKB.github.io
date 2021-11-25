import React, { useEffect, useState }  from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import YoutubeEmbed from '../../components/YoutubeEmbed.js/YoutubeEmbed';
import { getTrimmedText, scrollToTop } from '../../utils/app';
import PageHeader from "../../components/PageHeader/PageHeader"
import styles from "./style.module.css";
// import Divider from "../../components/CustomDivider/Divider"

const VideoDetails = () => {
  const { slug } = useParams();
  const video = useSelector(state => state.videos.data.find((vid) => vid.slug === slug));
  const [relatedVideos, setRelatedVideos] = useState([])
  useEffect(() => {
    getRelatedVideos();
  }, [video])

  const getRelatedVideos = async () => {
    if (video) {
      const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/videos?per_page=10&categories[]=${video.categories}`);
      
      const otherVidoes = res.data.filter((vid) => vid.id != video.id);
      setRelatedVideos(otherVidoes);
    }
  }

  useEffect(() => {
    scrollToTop()
  }, [video])
  
  return (
    <div>
      <PageHeader render={() => (
        <h3>Videos</h3>
      )} />
      {/* <div className="container pt-5">
        <h3 className="font-bold" dangerouslySetInnerHTML={{__html: video.title.rendered}}/>
      </div> */}
      {video && (
        <>
        <div className={styles.video_wrapper}>
          {!video.acf.youtube_url && video.acf.video_url &&
              <VideoPlayer title={video.title.rendered} videoUrl={video.acf.video_url}/>}
            {video.acf.youtube_url && 
              <YoutubeEmbed
                embedId={video.acf.youtube_video_id}
                title={video.title.rendered}
              />}
          {/* <div className={`container pt-1 ${styles.video_title}`}>
            <h3 className="font-bold" dangerouslySetInnerHTML={{__html: video.title.rendered}}/>
          </div> */}
        </div>
          <div className="container">
            <div className="mt-5">
              {relatedVideos && relatedVideos.length > 0 ? <h2 className="font-bold">Related Videos</h2> : null}
              <Grid container spacing={2} className="pb-16">
                {relatedVideos && relatedVideos.map((relVid) => (
                  <Grid item xs={6}>
                    <VideoThumbnail 
                      caption={getTrimmedText(relVid.title.rendered)}
                      imageUrl={relVid.acf.thumbnail}
                      curve
                      dataId={relVid.slug}
                      path="videos"
                      type="video"
                    />
                  </Grid>
                ))}
                {/* <Grid item xs={6}>
                  <VideoThumbnail curve caption="some sample text is here for the video content." />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail curve caption="some sample text is here for the video content." />
                </Grid>
                <Grid item xs={6}>
                  <VideoThumbnail curve caption="some sample text is here for the video content." />
                </Grid> */}
              </Grid>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

VideoDetails.propTypes = {
  video: PropTypes.object,
}

export default VideoDetails
