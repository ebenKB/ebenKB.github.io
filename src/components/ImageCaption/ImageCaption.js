import React from 'react';
import styles from "./style.module.css";

const ImageCaption = ({imageUrl, caption, fixed=false}) => {
  return (
    <div className={styles.wrapper}>
      <img src={imageUrl} 
        alt=""  
        className={`${fixed ? styles.fixed: null}`}
      />
      <p>{caption}</p>
    </div>
  )
}

export default ImageCaption
