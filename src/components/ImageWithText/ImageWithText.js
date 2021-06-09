import React from 'react'
import styles from "./style.module.css";

const ImageWithText = () => {
  return (
    <div className={styles.wrapper}>
      <img 
        src="https://ak.picdn.net/shutterstock/videos/602245/thumb/1.jpg" 
        alt=""  
        className="w-full"
      />
      <div className={styles.overlay}></div>
      <div className={styles.caption}>
        <p>Lorem ipsum dolor sit amet, consecteturiciis veniam. Maxime sequi atque tempore.</p>
      </div>
    </div>
  )
}

export default ImageWithText
