import React from 'react'
// import PropTypes from 'prop-types';
import styles from "./style.module.css";
import { Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { format } from "date-fns";

const EventItem = ({ event }) => {
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div>{format(new Date(event.acf.date_of_event), "eee, do MMM yyyy")}</div>
          <div className={`${styles.faint}`}>{event.acf.time_of_event}</div>
        </Grid>
        <Grid item xs={6}>
          <div className="font-bold">
            <Link to={`/events/${event.slug}`} className="App-link">{event.acf.title}</Link>
          </div>
          <div className={`${styles.iconCaption} ${styles.faint}`}>
            <LocationOnIcon />
            <div className="">{event.acf.region}</div>
          </div>
          <div>
            <Link to={`/events/${event.slug}`} className="">More Info</Link>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Link to={`/events/${event.slug}`} className="App-link">
            <img src={event.acf.pictures} alt="" 
              className="w-full"
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}

EventItem.propTypes = {

}

export default EventItem
