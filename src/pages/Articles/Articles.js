import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import styles from "./styles.module.css";
import { Grid } from '@material-ui/core';
import ImageCaption from "../../components/ImageCaption/ImageCaption";
import ImageWithText from "../../components/ImageWithText/ImageWithText";
import { Link } from "react-router-dom";
import WPAPI from 'wpapi';
import Axios from "axios";
import { selectCategoryBySlug } from '../../features/categories/categorySlice'

const Articles = props => {
  const [page, setPage] = useState("");
  useEffect(() => {
    // const wp = new WPAPI({ endpoint: 'https://heritage.bypulse.africa/wp-json' });
    // wp.posts().get(function( err, data ) {
    //   if ( err ) {
    //       // handle err
    //   }
    //   // do something with the returned posts
    //   console.log(data)
    // });
    
    Axios.get("https://heritage.bypulse.africa/wp-json/wp/v2/categories")
    .then((data) => {
      console.log("Categories", data)
      // setPage(data);
    })

    Axios.get("https://heritage.bypulse.africa/wp-json/wp/v2/posts?per_page=10&categories=2")
    .then((data) => {
      console.log("Data", data)
    })

    console.log("this is the category", selectCategoryBySlug("articles"))
}, [])
  return (
    <div>
      {page.data && (
         <p dangerouslySetInnerHTML={{__html: page.data[0].content.rendered}} /> 
      )}
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
