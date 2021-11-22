import React, { useState, useEffect } from 'react'
import styles from "./styles.module.css";
import ImageCaption  from "../../components/ImageCaption/ImageCaption";
import HashTag from "../../components/HashTag/HashTag";
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import { getTrimmedText } from "../../utils/app";
import { Grid } from '@material-ui/core';


const ArticleDetails = () => {
  const { id } = useParams();
  let article = useSelector((state) => state.articles.data.find((article) => article.id == id));
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(article);

  const getArticleByID = async () => {
    const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles/${id}?_embed`);
    setCurrentArticle(res.data);
  }

  const getRelatedArticles = async () => {
    if (currentArticle) {
      const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?per_page=10&categories[]=${currentArticle.categories}&_embed`);
      setRelatedArticles(res.data.filter((x) => x.id !== currentArticle.id));
    }
  }

  useEffect(() => {
    getArticleByID();
  }, [])

  useEffect(() => {
    getRelatedArticles();
  }, [currentArticle]);

  return (
    <div className={`${styles.detailsWrapper} font-bold`}>
      {currentArticle && (
        <>
          <div className="mt-10">
            <h2 className="font-bold">{currentArticle.acf.title}</h2>
          </div>
          <ImageCaption
            imageUrl={currentArticle._embedded['wp:featuredmedia'] && currentArticle._embedded['wp:featuredmedia'][0].source_url} 
            caption={(
              <span dangerouslySetInnerHTML={{__html: currentArticle._embedded['wp:featuredmedia'] !== undefined ? currentArticle._embedded['wp:featuredmedia'][0].caption.rendered : null}} />
            )}
          />
          <div className={`${styles.content}`}>
            <HashTag rawTags={currentArticle.tags} />
            <div dangerouslySetInnerHTML={{__html: currentArticle.acf.content}} />
          </div>
        </>
      )}
      { relatedArticles && relatedArticles.length > 0 && (
        <>
         <h3>Related Articles</h3>
          <Grid container spacing={2} style={{paddingBottom: "60px"}}>
            {relatedArticles.map((relArticle) => (
              <Grid item sm={6} xs={6}>
                <Link to={`/articles/${relArticle.id}`} className="App-link">
                  <ImageCaption
                    imageUrl={relArticle._embedded['wp:featuredmedia'] && relArticle._embedded['wp:featuredmedia'][0].source_url} 
                    fixed
                    caption={getTrimmedText(relArticle.title.rendered)}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  )
}

export default ArticleDetails
