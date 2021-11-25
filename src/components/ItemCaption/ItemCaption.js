import React from "react";
import styles from "./ItemCaption.module.css";

const ItemCaption = ({caption}) => {
  return (
    // <div className={styles.wrapper}>{caption}</div>
    <p className={`${styles.wrapper}`} dangerouslySetInnerHTML={{__html: caption}} />
  )
}

export default ItemCaption;
