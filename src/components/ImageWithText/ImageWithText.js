import React from 'react'
import styles from "./style.module.css";

const ImageWithText = ({ imageUrl, caption }) => {
  return (
    <div className={styles.wrapper}>
      <img 
        src={ imageUrl } 
        alt=""  
        className="w-full"
      />
      <div className={styles.overlay}></div>
      <div className={styles.caption}>
        <p dangerouslySetInnerHTML={{__html: caption}} />
      </div>
    </div>
  )
}

export default ImageWithText
