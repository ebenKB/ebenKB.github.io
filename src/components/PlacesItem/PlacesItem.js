import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.css";
import { ReactComponent as Chevron } from "../../assets/images/down-chevron.svg";
import HashTag from '../HashTag/HashTag';
import { Link } from 'react-router-dom';

const PlacesItem = ({ place }) => {
  return (
    <div className={styles.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={3} classes={{root: styles.imgWrapper}}>
          <img src="https://image.shutterstock.com/image-photo/accra-ghana-february-23-2012-260nw-241567267.jpg" alt=""/>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.caption}>
          <h3>Cultural Center</h3>
            Lorem ipsum dolor, sit xcepturi impedit saepe.
            Lorem ipsum dolor, sit xcepturi impedit saepe.
          </div>
          <Link to="/places/56">More Info.</Link>
          <HashTag tags={["#Ayigbe Road"]} />
        </Grid>
        <Grid item xs={1} style={{marginLeft: "auto"}}>
          <Chevron className={`${styles.icon}`} />
        </Grid>
      </Grid>
    </div>
  )
}

PlacesItem.propTypes = {
  place: PropTypes.array.isRequired,
}

export default PlacesItem
