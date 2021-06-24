import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import styles from "./styles.module.css";
import { Grid } from '@material-ui/core';
import ImageCaption from "../../components/ImageCaption/ImageCaption";
import ImageWithText from "../../components/ImageWithText/ImageWithText";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { addArticles } from '../../features/articles/articleSlice';

const Articles = props => {
  const articles = useSelector((state) => state.articles.data);
  const dispatch = useDispatch();
  const category = useSelector((state) =>
    state.categories.data.find((cat) => cat.slug === "articles"))

  useEffect(() => {
    if (category) {
      getArticles();
    }
}, [category]);

const getArticles = async () => {
  const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/posts?per_page=10&categories=${category.id}`);
  dispatch(addArticles(res.data));
}

  return (
    <div>
      <ImageWithText />
      {articles.map((article) =>
        <p>
          <h1>hello {article.id}</h1>
          {article.content.rendered}
        </p>
      )}
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
