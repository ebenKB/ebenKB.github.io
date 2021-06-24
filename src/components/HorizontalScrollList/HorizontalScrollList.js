import React from 'react'
import PropTypes from 'prop-types'
import styles from "./style.module.css";
import { Link } from "react-router-dom"

const HorizontalScrollList = ({ items= [{
  imageUrl: "https://dailyguidenetwork.com/wp-content/uploads/2018/05/Lady-Julia-640x406.jpg",
  caption: "Heading here",
  id: ""
}], path="" }) => {
  return (
    <div className={`${styles.hScrollWrapper} flex`}>
      {items.map((item) => (
        <div className={`flex-1 ${styles.itemWrapper}`}>
          <Link to={`/${path}/${item.id}`}>
            <div className={styles.item}><img src={item.imageUrl} alt="" className="" /></div>
            <div className={styles.caption}>{item.caption}</div>
          </Link>
        </div>
      ))}
    </div>
  )
}

HorizontalScrollList.propTypes = {
  items: PropTypes.array.isRequired
}

export default HorizontalScrollList
