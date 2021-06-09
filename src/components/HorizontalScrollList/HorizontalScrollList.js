import React from 'react'
import PropTypes from 'prop-types'
import styles from "./style.module.css";

const HorizontalScrollList = ({ items= [
    "https://dailyguidenetwork.com/wp-content/uploads/2018/05/Lady-Julia-640x406.jpg", 
    "https://dailyguidenetwork.com/wp-content/uploads/2018/05/Lady-Julia-640x406.jpg",
    "https://dailyguidenetwork.com/wp-content/uploads/2018/05/Lady-Julia-640x406.jpg",
    "https://dailyguidenetwork.com/wp-content/uploads/2018/05/Lady-Julia-640x406.jpg",
    "https://dailyguidenetwork.com/wp-content/uploads/2018/05/Lady-Julia-640x406.jpg"
  ] }) => {
  return (
    <div className={`${styles.hScrollWrapper} flex`}>
      {items.map((item) => (
        <div className={`flex-1 ${styles.itemWrapper}`}>
          <div className={styles.item}><img src={item} alt="" className="" /></div>
          <div className={styles.caption}>Heading here</div>
        </div>
      ))}
    </div>
  )
}

HorizontalScrollList.propTypes = {
  items: PropTypes.array.isRequired
}

export default HorizontalScrollList
