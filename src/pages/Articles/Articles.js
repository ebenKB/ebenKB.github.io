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
import Loader from '../../components/Loader/Loader';
import { getTrimmedText} from "../../utils/app";
import ReactGA from "react-ga4";
import {Helmet} from "react-helmet"

const Articles = (props) => {
  const [loading, setLoading] = useState(false);
  const articles = useSelector((state) => state.articles.data);
  const [latestArticle, ...allArticles] = articles;
  const [perPage, setPerPage] = useState(15);
  const dispatch = useDispatch();

  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search})
  }, []);

  const getArticles = async () => {
    setLoading(true);
    const res = await Axios
      .get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?_embed&per_page=${perPage}`);
    dispatch(addArticles(res.data));
    setLoading(false);
  }

  return (
    <>
      <Helmet>
        <title>MTN Herritage App | Articles</title>
        <meta name="title" content="MTN Heritage App Articles" />
        <meta name="description" content="MTN Heritage app Articles" />
        <meta name="keywords" content="MTN Heritage, MTN app, Heritage videos, heritage app" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div>
        <h3>Trending articles</h3>
        {loading && <Loader />}
        {latestArticle && <Link to={`/articles/${latestArticle.slug}`}>
          <ImageWithText
            imageUrl={latestArticle._embedded['wp:featuredmedia'][0].source_url}
            caption={getTrimmedText(latestArticle.title.rendered)}
            fixed={false}
          />
        </Link>}
        <div className={styles.wrapper}>
          <Grid container spacing={3} classes={{root: styles.content}} >
              {allArticles.map((article) => (
                <Grid item xs={6}>
                  <Link to={`/articles/${article.slug}`}>
                    <ImageCaption  
                      imageUrl={article._embedded['wp:featuredmedia'] && article._embedded['wp:featuredmedia'][0].source_url}
                      caption={getTrimmedText(article.title.rendered)}
                      fixed
                    />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </>
  )
}

Articles.propTypes = {

}

export default Articles
