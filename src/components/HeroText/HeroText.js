import React from "react";
import styles from "./style.module.css";

const HeroText  = ({ text, caption="" }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_content}>
        <p dangerouslySetInnerHTML={{__html: text}} className={styles.wrapper_text} />
        {caption !== "" && <div className={styles.wrapper_caption}>{caption}</div>}
      </div>
    </div>
  )
}
export default HeroText;
