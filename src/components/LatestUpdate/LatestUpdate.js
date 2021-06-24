import React, { useEffect, useState } from 'react'
import StoryItem from '../StoryItem/StoryItem'
import { Divider } from '@material-ui/core';
import './style.css';
import Axios from 'axios';

const LatestUpdate = (props) => {
  const [latestArticle, setLatestArticle] = useState();

  const getLatestUpdate = async () => {
    const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?_embed&per_page=1`);
    console.log(res.data)
    setLatestArticle(res.data[0]);
  }

  useEffect(() => {
    getLatestUpdate();
  }, [])
  return (
    <div className="text-xs wrapper">
      <h3 style={{marginBottom: "8px"}} className="text-yellow-800">Latest Update</h3>
      <div className="story-item_wrapper">
        <div className="item">
          <StoryItem story={latestArticle}/>
        </div>
      </div>
      <Divider style={{marginBottom: "20px"}}/>
    </div>
  )
}

LatestUpdate.propTypes = {

}

export default LatestUpdate
