import React from "react";
import styles from "./PageHeader.module.css";
import Logo from "../../assets/images/logo.png";

const PageHeader = (props) => {
  return (
    <>
    <div className={styles.wrapper}>
      <img src={Logo} alt=""  style={{width: "20px", marginRight: "4px"}}/>
      {props.render()}
    </div>
    <div className={styles.offset}></div>
    </>
  )
}
export default PageHeader;