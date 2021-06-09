import React from 'react'
// import PropTypes from 'prop-types'
import styles from "./styles.module.css";
import { Grid } from '@material-ui/core';
import ImageCaption from "../../components/ImageCaption/ImageCaption";
import ImageWithText from "../../components/ImageWithText/ImageWithText";
import { Link } from "react-router-dom";

const Articles = props => {
  return (
    <div>
      <ImageWithText />
      <div className={styles.wrapper}>
        <Grid container spacing={3} classes={{root: styles.content}} >
            <Grid item xs={6}>
              <Link to="/articles/4">
                <ImageCaption />
              </Link>
            </Grid>
            <Grid item xs={6}>
              <ImageCaption />
            </Grid>
            <Grid item xs={6}>
              <ImageCaption />
            </Grid>
            <Grid item xs={6}>
              <ImageCaption />
            </Grid>
            <Grid item xs={6}>
              <ImageCaption />
            </Grid>
            <Grid item xs={6}>
              <ImageCaption />
            </Grid>
        </Grid>
      </div>
    </div>
  )
}

Articles.propTypes = {

}

export default Articles
