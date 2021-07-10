import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { Grid, Divider } from '@material-ui/core'
import StoryCaption from '../StoryCaption/StoryCaption'
import Axios from "axios";
import { Link } from "react-router-dom";

const Trends = (props) => {
  const [trendingPlaces, setTrendingPlaces] =  useState(null);

  const getTrendingPlaces = async () => {
    const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/places?_embed&per_page=3`);
    setTrendingPlaces(res.data);
  }

  useEffect(() => {
    getTrendingPlaces();
  }, [])

  return (
    <div className="text-xs">
      <h3>Trending Around You</h3>
      <Grid container spacing={1} style={{marginBottom: '10px'}}>
        {trendingPlaces && trendingPlaces.map((place) => (
          <Grid item md={4} sm={4} xs={4}>
            <Link to={`/places/${place.id}`} className="App-link">    
              <StoryCaption
                story={{url: place.acf.file, caption: place.title.rendered}}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
      <Divider style={{marginBottom: '10px'}} />
    </div>
  )
}

Trends.propTypes = {

}

export default Trends
