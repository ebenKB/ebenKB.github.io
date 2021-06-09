import React from 'react'
// import PropTypes from 'prop-types';
import styles from "./style.module.css";
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const EventItem = ({ event }) => {
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div>24 May</div>
          <div className={`${styles.faint}`}>9:00AM</div>
        </Grid>
        <Grid item xs={6}>
          <div className="font-bold">
            Asafoatse Festival
          </div>
          <div className={`${styles.iconCaption} ${styles.faint}`}>
            <LocationOnIcon />
            <div>Location</div>
          </div>
          <div>
            <Link to="/events/34">More Info</Link>
          </div>
        </Grid>
        <Grid item xs={3}>
          <img src="https://live.staticflickr.com/7528/15711784487_bce4695afc_b.jpg" alt="" 
            className="w-full"
          />
        </Grid>
      </Grid>
    </div>
  )
}

EventItem.propTypes = {

}

export default EventItem
