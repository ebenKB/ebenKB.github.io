import React, { useEffect, useState } from 'react'
import StoryItem from '../StoryItem/StoryItem'
import { Divider, Grid } from '@material-ui/core';
import './style.css';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addArticles } from '../../features/articles/articleSlice';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { getTrimmedText } from '../../utils/app';
import ImageCaption from '../ImageCaption/ImageCaption';

const LatestUpdate = (props) => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.data);
  const [latestArticle, ...allRecentArticles] = articles;
  const [loading, setLoading] = useState(false);

  const getLatestUpdate = async () => {
    setLoading(true);
    const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?_embed&per_page=5`);
    dispatch(addArticles(res.data))
    setLoading(false);
  }

  useEffect(() => {
    getLatestUpdate();
  }, [])
  return (
    <div className="text-xs wrapper">
      <h3 style={{marginBottom: "8px"}} className="text-gray-700 font-bold">Latest Updates</h3>
      {latestArticle && (
      <div className="story-item_wrapper">
        <div className="item">
          <StoryItem
            id={latestArticle.id} 
            imageUrl={latestArticle._embedded["wp:featuredmedia"] && latestArticle._embedded["wp:featuredmedia"][0].source_url} 
            type={latestArticle._embedded["wp:featuredmedia"] && latestArticle._embedded["wp:featuredmedia"][0].media_type}
            title={latestArticle.title.rendered}
          />
        </div>
      </div>
      )}
      <Divider style={{marginBottom: "20px"}}/>
      {loading && <Loader />}
        <Grid container spacing={2}>
          {allRecentArticles && allRecentArticles.map((article) => (
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
    </div>
  )
}

LatestUpdate.propTypes = {

}

export default LatestUpdate
