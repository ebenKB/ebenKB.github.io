import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
import './Carousel.css';
import { Carousel } from 'antd';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { addTags } from '../../features/tags/tagsSlice';
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';
import { getTrimmedText } from '../../utils/app';
import { addFeaturedContent } from '../../features/featuredContents/featuredContentsSlice';

const CarouselWrapper = (props) => {
  const [loading, setLoading] = useState(false);
  const carousel = React.createRef();
  const dispatch = useDispatch();
  const featuredTag = useSelector((state) => state.tags.tags.find((tag) => tag.slug === "featured"));
  const featuredArticles = useSelector((state) => state.featuredContent.featuredArticles);
  
  const getTags = async () => {
    try {
      setLoading(true);
      const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/tags`)
      dispatch(addTags(res.data));
    } catch (error) {
      setLoading(false);
    }
  }

  const getFeaturedArticles = async () => {
    setLoading(true);
    try {
      if (featuredTag) {
        const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/articles?_embed&per_page=5&tags[]=${featuredTag.id}`);
        dispatch(addFeaturedContent({
          name: "featuredArticles",
          data: res.data
        }))
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTags();
  }, []);

  useEffect(() => {
    getFeaturedArticles();
  }, [featuredTag])

  const contentStyle = {
    height: '180px',
    width: "100%",
    textAlign: 'center',
    background: '#364d79',
    position: "relative",
  };

  return (
    <div className="carousel_wrapper">
      {loading && <Loader />}
      {featuredArticles && (
        <>
          <div className="controls">
            <div className="item navLeft" onClick={() => carousel.current.prev()}><LeftCircleOutlined /></div>
            <div className="item navRight" onClick={() => carousel.current.next()}><RightCircleOutlined /></div>
          </div>
          <Carousel
            // afterChange={onChange}
            autoplay={false}
            dotPosition="bottom"
            arrows={false} 
            ref={carousel}
            // dotsClass="dot-class"
            // nextArrow={<div style={{ position: "absolute", zIndex:"3", color: "red", background: "red", width: "40px", height: "40px"}}><RightCircleOutlined /> </div>}
            // prevArrow={(<div><LeftCircleOutlined /></div>)
          >
            {featuredArticles.map((article) => (
              <div className="carousel_content">
                <div style={contentStyle}>
                  <Link to={`/articles/${article.id}`}>
                    <img style={contentStyle} 
                    src={article._embedded["wp:featuredmedia"] && article._embedded["wp:featuredmedia"][0].source_url} alt=""
                  />
                  </Link>
                </div>
                <div className="carousel_title">
                  <p dangerouslySetInnerHTML={{__html: getTrimmedText(article.title.rendered)}} />
                </div>
              </div>
            ))}
          </Carousel>
        </>
      )}
    </div>
  )
}

CarouselWrapper.propTypes = {

}

export default CarouselWrapper
