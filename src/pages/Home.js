import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
import AppContainer from '../components/AppContainer/AppContainer'
import LatestUpdate from '../components/LatestUpdate/LatestUpdate'
import HorizontalScrollList from '../components/HorizontalScrollList/HorizontalScrollList'
import Carousel from "../components/Carousel/Carousel";
import Trends from "../components/Trends/Trends";
import Loader from '../components/Loader/Loader';
import { addArticles } from '../features/articles/articleSlice';
import { useSelector, useDispatch } from 'react-redux';
import Axios from "axios";
import { Grid } from '@material-ui/core';
import ImageCaption from '../components/ImageCaption/ImageCaption';
import { Link } from 'react-router-dom';
import { getTrimmedText} from "../utils/app";

const Home = props => {
  const [loading, setLoading] = useState(false);
  const articles = useSelector((state) => state.articles.data);
  const [latest, ...allArticles] = articles;
  const dispatch = useDispatch();

  const getArticles = async () => {
    setLoading(true);
    const res = await Axios
      .get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?_embed&per_page=6`);
    dispatch(addArticles(res.data));
    setLoading(false);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <Carousel />
      <AppContainer>
        {/* <Trends /> */}
        <LatestUpdate />
        {loading && <Loader />}
        <Grid container spacing={2}>
          {allArticles && allArticles.map((article) => (
            <Grid item xs={6}>
              <Link to={`/articles/${article.id}`} className="App-link">
                <ImageCaption
                  imageUrl={article._embedded['wp:featuredmedia'] && article._embedded['wp:featuredmedia'][0].source_url}
                  caption={getTrimmedText(article.title.rendered)}
                  fixed
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </AppContainer>
    </>
  )
}

Home.propTypes = {

}

export default Home