import React from 'react'
// import PropTypes from 'prop-types';
import './Carousel.css';
import { Carousel } from 'antd';
import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const CarouselWrapper = (props) => {
  const carousel = React.createRef();

  const onChange = () => {
    console.log("This is a slider")
  }

  const contentStyle = {
    height: '180px',
    width: "100%",
    // color: '#fff',
    // lineHeight: '180px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div className="carousel_wrapper">
      <div className="controls">
        <div className="item navLeft" onClick={() => carousel.current.prev()}><LeftCircleOutlined /></div>
        <div className="item navRight" onClick={() => carousel.current.next()}><RightCircleOutlined /></div>
      </div>
      <Carousel
        afterChange={onChange}
        autoplay={false}
        dotPosition="bottom"
        arrows={false} 
        ref={carousel}
        // dotsClass="dot-class"
        // nextArrow={<div style={{ position: "absolute", zIndex:"3", color: "red", background: "red", width: "40px", height: "40px"}}><RightCircleOutlined /> </div>}
        // prevArrow={(<div><LeftCircleOutlined /></div>)}
        

      >
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <div style={contentStyle}>
            <img style={contentStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJF-FFYxk8x__1i7aCHN-UWIA60CZ0ZU1nmA&usqp=CAU" alt=""/>
          </div>
        </div>
        <div>
        <div style={contentStyle}>
            <img style={contentStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGdsvJtB0rQ0fbwgHUi_zUVWSpsHWi7cG-g&usqp=CAU" alt=""/>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img style={contentStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jT7jMVHbWWrMZl1eYPkQZpUqvz3oPO-mYQ&usqp=CAU" alt=""/>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img style={contentStyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hprJD6Rr10YUYJBVdF-RSqC0kG7f38dqAA&usqp=CAU" alt=""/>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

CarouselWrapper.propTypes = {

}

export default CarouselWrapper
