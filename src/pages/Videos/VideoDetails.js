import React, { useEffect, useState }  from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import { Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const VideoDetails = () => {
  const { id } = useParams();
  const video = useSelector(state => state.videos.data.find((vid) => vid.id == id));
  const [relatedVideos, setRelatedVideos] = useState([])
  useEffect(() => {
    getRelatedVideos();
  }, [video])

  const getRelatedVideos = async () => {
    if (video) {
      const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/videos?per_page=10&categories[]=${video.categories}`);
      
      const otherVidoes = res.data.filter((vid) => vid.id != id);
      setRelatedVideos(otherVidoes);
    }
  }

  return (
    <div>
      <div className="container pt-5">
        <h3 className="font-bold" dangerouslySetInnerHTML={{__html: video.title.rendered}}/>
      </div>
      {video && (
        <>
          <VideoPlayer caption={video.title.rendered} videoUrl={video.acf.video_url}/>
          <div className="container">
            <div className="mt-5">
              {relatedVideos && relatedVideos.length > 0 ? <h2 className="font-bold">Related Videos</h2> : null}
              <Grid container spacing={3}>
                {relatedVideos && relatedVideos.map((relVid) => (
                  <Grid item xs={6}>
                    <VideoThumbnail 
                      caption={relVid.title.rendered}
                      imageUrl={relVid.acf.thumbnail}
                      curve
                      dataId={relVid.id}
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
