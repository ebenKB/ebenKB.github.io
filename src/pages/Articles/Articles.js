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

const Articles = (props) => {
  const [loading, setLoading] = useState(false);
  const articles = useSelector((state) => state.articles.data);
  const [latestArticle, ...allArticles] = articles;
  const [perPage, setPerPage] = useState(15);
  const dispatch = useDispatch();

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    setLoading(true);
    const res = await Axios
      .get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?_embed&per_page=${perPage}`);
    dispatch(addArticles(res.data));
    setLoading(false);
  }

  return (
    <div>
      <h3>Trending articles</h3>
      {loading && <Loader />}
      {latestArticle && <Link to={`/articles/${latestArticle.id}`}>
        <ImageWithText
          imageUrl={latestArticle._embedded['wp:featuredmedia'][0].source_url}
          caption={latestArticle.title.rendered}
          fixed={false}
        />
      </Link>}
      <div className={styles.wrapper}>
        <Grid container spacing={3} classes={{root: styles.content}} >
            {allArticles.map((article) => (
              <Grid item xs={6}>
                <Link to={`/articles/${article.id}`}>
                  <ImageCaption  
                    imageUrl={article._embedded['wp:featuredmedia'][0].source_url}
                    caption={article.title.rendered}
                    fixed
                  />
                </Link>
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  )
}

Articles.propTypes = {

}

export default Articles
