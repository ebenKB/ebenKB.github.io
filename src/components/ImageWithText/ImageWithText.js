import React from 'react'
import HeroText from '../HeroText/HeroText';
import ItemCaption from '../ItemCaption/ItemCaption';
import styles from "./style.module.css";

const ImageWithText = ({ imageUrl, caption, pubDate="" }) => {
  return (
    <>
    <div className={styles.wrapper}>
      <img 
        src={ imageUrl } 
        alt=""  
        className="w-full"
      />
      <div className={styles.overlay}></div>
    </div>
    {/* <div className={styles.caption}>
      <p dangerouslySetInnerHTML={{__html: caption}} />
    </div> */}
    <HeroText text={caption} caption={pubDate} />
    </>
  )
}

export default ImageWithText
