import React from 'react';
import styles from "./style.module.css";

const ImageCaption = () => {
  return (
    <div className={styles.wrapper}>
      <img src="https://netstorage-yen.akamaized.net/images/3o3bpd2sd3nnp5erl.jpg?&imwidth=600" 
        alt=""
      />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  )
}

export default ImageCaption
