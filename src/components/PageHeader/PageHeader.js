import React from "react";
import styles from "./PageHeader.module.css";


const PageHeader = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.render()}
    </div>
  )
}
export default PageHeader;