import React from 'react'
// import PropTypes from 'prop-types'
import { Grid, Divider } from '@material-ui/core'
import StoryCaption from '../StoryCaption/StoryCaption'

const Trends = (props) => {
  return (
    <div className="text-xs">
      <h3>Trending Around You</h3>
      <Grid container spacing={1} style={{marginBottom: '10px'}}>
        <Grid item md={4} sm={4} xs={4}>
          <StoryCaption
            story={{url: "https://i.pinimg.com/564x/52/5c/d8/525cd8f4978061123db5e53803ec3b22.jpg"}}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={4}>
          <StoryCaption story ={{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6ZN9TNS1b5UkpOpzJVQv_miS18A0VZmFAQ&usqp=CAU"}} />
        </Grid>
        <Grid item md={4} sm={4} xs={4}>
          <StoryCaption
            story={{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWM-vCN41KxLZrwTOzZ5hB1QRc6WC-OM_Q4Q&usqp=CAU"}}
          />
        </Grid>
      </Grid>
      <Divider style={{marginBottom: '10px'}} />
    </div>
  )
}

Trends.propTypes = {

}

export default Trends
