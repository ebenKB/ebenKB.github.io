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
      { place && (
        <>
          <Grid item xs={3} classes={{root: styles.imgWrapper}}>
            <Link to={`/places/${place.id}`}>
              <img src={place.acf.file} alt=""/>
            </Link>
          </Grid>
            <Grid item xs={8}>
              <div className={styles.caption}>
              <h3>
                <Link to={`/places/${place.id}`}>
                  {place.acf.title}
                </Link>
              </h3>
              <p>{`${place.acf.description.substring(0, 80)}...`}</p>
              </div>
              <Link to={`/places/${place.id}`}>More Info.</Link>
              <HashTag tags={["#Ayigbe Road"]} />
            </Grid>
          <Grid item xs={1} style={{marginLeft: "auto"}}>
            <Chevron className={`${styles.icon}`} />
          </Grid>
        </>
        )}
      </Grid>
    </div>
  )
}

PlacesItem.propTypes = {
  place: PropTypes.object.isRequired,
}

export default PlacesItem
