import React, { useState, useEffect } from 'react'
import styles from "./styles.module.css";
import ImageCaption  from "../../components/ImageCaption/ImageCaption";
import HashTag from "../../components/HashTag/HashTag";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';

const ArticleDetails = () => {
  const { id } = useParams();
  const article = useSelector((state) => state.articles.data.find((article) => article.id == id));
  const [relatedArticles, setRelatedArticles] = useState([]);

  const getRelatedArticles = async () => {
    const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?per_page=10&categories[]=${article.categories}`);
    setRelatedArticles(res.data);
    console.log("Related articles:", res.data);
  }

  useEffect(() => {
    getRelatedArticles();
  }, [article]);

  return (
    <div className={`${styles.detailsWrapper} font-bold`}>
      {article && (
        <>
          <div className="mt-10">
            <h2 className="font-bold">{article.acf.title}</h2>
          </div>
          <ImageCaption
            imageUrl={article._embedded['wp:featuredmedia'] && article._embedded['wp:featuredmedia'][0].source_url} 
            caption={(
              <span dangerouslySetInnerHTML={{__html: article._embedded['wp:featuredmedia'] !== undefined ? article._embedded['wp:featuredmedia'][0].caption.rendered : null}} />
            )}
          />
          <div className={`${styles.content}`}>
            {/* <HashTag tags={["#tag1", "#tag2"]} /> */}
            <div dangerouslySetInnerHTML={{__html: article.acf.content}} />
          </div>
        </>
      )}
    </div>
  )
}

export default ArticleDetails
