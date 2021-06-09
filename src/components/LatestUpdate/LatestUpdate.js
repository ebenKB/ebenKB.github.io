import React from 'react'
// import PropTypes from 'prop-types'
import StoryItem from '../StoryItem/StoryItem'
import { Divider } from '@material-ui/core';
import './style.css';

const LatestUpdate = (props) => {
  return (
    <div className="text-xs wrapper">
      <h3 style={{marginBottom: "8px"}} className="text-yellow-800">Latest Update</h3>
      <div className="story-item_wrapper">
        <div className="item">
          <StoryItem />
        </div>
      </div>
      <Divider style={{marginBottom: "20px"}}/>
    </div>
  )
}

LatestUpdate.propTypes = {

}

export default LatestUpdate
