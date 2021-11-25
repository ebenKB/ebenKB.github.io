import React, { useState, useEffect } from 'react'
import styles from "./styles.module.css";
import ImageCaption  from "../../components/ImageCaption/ImageCaption";
import HashTag from "../../components/HashTag/HashTag";
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import { getTrimmedText, scrollToTop } from "../../utils/app";
import { Grid } from '@material-ui/core';
import PageHeader from "../../components/PageHeader/PageHeader"

const ArticleDetails = () => {
  const { slug } = useParams();
  let article = useSelector((state) => state.articles.data.find((article) => article.slug === slug));
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(article);

  const getArticleByID = async () => {
    if (article) {
      const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles/${article.id}?_embed`);
      setCurrentArticle(res.data);
    }
  }

  const getRelatedArticles = async () => {
    if (currentArticle) {
      const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?per_page=10&categories[]=${currentArticle.categories}&_embed`);
      setRelatedArticles(res.data.filter((x) => x.id !== currentArticle.id));
    }
  }

  useEffect(() => {
    getArticleByID();
    scrollToTop();
  }, [slug])

  useEffect(() => {
    getRelatedArticles();
  }, [currentArticle, slug]);

  return (
    <>
    <PageHeader render={() => (
      <h3>Articles</h3>
    )} />
    <div className={`${styles.detailsWrapper}`}>
      {currentArticle && (
        <>
          <div className="mt-5">
            <h2 className="font-bold">{currentArticle.acf.title}</h2>
          </div>
          <ImageCaption
            imageUrl={currentArticle._embedded['wp:featuredmedia'] && currentArticle._embedded['wp:featuredmedia'][0].source_url} 
            caption={currentArticle._embedded['wp:featuredmedia'] !== undefined ? currentArticle._embedded['wp:featuredmedia'][0].caption.rendered : null}
          />
          <div className={`${styles.content} text-justify`}>
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
                <Link to={`/articles/${relArticle.slug}`} className="App-link">
                  <ImageCaption
                    imageUrl={relArticle._embedded['wp:featuredmedia'] && relArticle._embedded['wp:featuredmedia'][0].source_url} 
                    fixed
                    caption={getTrimmedText(relArticle.title.rendered, 18)}
                    curve
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  </>
  )
}

export default ArticleDetails
