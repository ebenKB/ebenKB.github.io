import React from 'react';
import styles from "./style.module.css";
import { ReactComponent as VideoIcon } from "../../assets/images/play.svg";
import { Link } from "react-router-dom";

const VideoThumbnail = ({ path="articles", size, dataId, curve = false, caption="", imageUrl = "https://pbs.twimg.com/media/EWOUhggVcAE7WKA.jpg", type}) => {
  return (
    <Link to={`/${path}/${dataId}`} className={styles.link}>
      <div className={`${styles.thumbnailWrapper} ${size === "small" ? styles.small : styles.big}`}>
        <div className={`${styles.thumbnail}`}>
          <img src={imageUrl} alt="" className={`${curve ? styles.curve : ""}`} />
        </div>
        {type !== "image" && (
          <div className={styles.icon}>
            <VideoIcon/>
          </div>
        )}
      </div>
      { caption !== "" && (
        <p className={`${styles.caption}`}> {caption} </p>
      )}
    </Link>
  )
}

export default VideoThumbnail
