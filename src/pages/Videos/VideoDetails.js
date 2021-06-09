import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import { Grid } from "@material-ui/core";

const VideoDetails = ({ video }) => {
  return (
    <div>
      <div className="container pt-5">
        <h3 className="font-bold">This is the title of the video</h3>
      </div>
      <VideoPlayer />
      <div className="container">
        <div className="mt-5">
          <h2 className="font-bold">Related Articles</h2>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <VideoThumbnail curve caption="some sample text is here for the video content." />
            </Grid>
            <Grid item xs={6}>
              <VideoThumbnail curve caption="some sample text is here for the video content." />
            </Grid>
            <Grid item xs={6}>
              <VideoThumbnail curve caption="some sample text is here for the video content." />
            </Grid>
            <Grid item xs={6}>
              <VideoThumbnail curve caption="some sample text is here for the video content." />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

VideoDetails.propTypes = {
  video: PropTypes.object,
}

export default VideoDetails
