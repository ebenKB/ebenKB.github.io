import React from 'react';
import styles from "./style.module.css";
import { ReactComponent as VideoIcon } from "../../assets/images/play.svg";
import { Link } from "react-router-dom";
import ItemCaption from '../ItemCaption/ItemCaption';

const VideoThumbnail = ({ path="articles", size, dataId, curve = false, embed_caption="", caption="", imageUrl = "https://pbs.twimg.com/media/EWOUhggVcAE7WKA.jpg", type}) => {
  const thumbnailStyle = (imageUrl) => {
    return {
      backgroundImage: `url(${imageUrl})`,
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "100% 100%",
      borderRadius: "8px",
    }
  }

  return (
    <Link to={`/${path}/${dataId}`} className={styles.link}>
      <div className={`${styles.thumbnailWrapper} ${size === "small" ? styles.small : styles.big} ${curve ? styles.curve : ""}`}>
        <div className={`${styles.thumbnail} ${curve ? styles.curve : ""}`} 
          style={thumbnailStyle(imageUrl)}
        >
          {/* <img src={imageUrl} alt="" className={`${curve ? styles.curve : ""}`} /> */}
          <div className={styles.embedCaption}>
            <h3 dangerouslySetInnerHTML={{__html: embed_caption}} />
          </div>
        </div>
        {type !== "image" && (
          <div className={styles.icon}>
            <VideoIcon/>
          </div>
        )}
      </div>
      { caption !== "" && (
        // <p className={`${styles.caption}`} dangerouslySetInnerHTML={{__html: caption}} />
        <ItemCaption />
      )}
    </Link>
  )
}

export default VideoThumbnail
