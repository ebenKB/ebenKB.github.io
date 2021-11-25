import React from 'react';
import { THEME } from '../../utils/constants';
import ItemCaption from '../ItemCaption/ItemCaption';
import styles from "./style.module.css";

const ImageCaption = (props) => {
  console.log("caption", props.caption)
  const { imageUrl, caption, curve=false, theme=THEME.WHITE, fixed=false } = props;

  return (
    // <ImageCaptionWithBackground {...props} />
    <div className={`${fixed ? styles.wrapper_fixed : styles.wrapper}`}>
      <img src={imageUrl} 
        alt=""  
        className={`${fixed ? styles.fixed: null} ${curve ? styles.curve : ""}`}
        style={{background: `url${imageUrl}`}}
      />
      <div className="mb-25">
        {theme === THEME.WHITE ? <p className="font-bold" dangerouslySetInnerHTML={{__html: caption}} /> 
        : <ItemCaption caption={caption} />}
      </div>
    </div>
  )
}

export default ImageCaption

const ImageCaptionWithBackground = (props) => {
  const { imageUrl, caption, curve=false, theme=THEME.WHITE, fixed=false } = props;

  const FixedImageStyle = (imageUrl) => {
    return {
      backgroundImage: `url(${imageUrl})`,
      height: "100%",
      width: "100%",
      backgroundSize: "cover cover",
      backgroundPosition: "100% 100%",
      borderRadius: "8px",
    }
  }


  return (
   <div className={`${styles.wrapper} ${curve ? styles.curve : ""}`}>
      <div style={FixedImageStyle(imageUrl)} />
      {theme === THEME.WHITE ? <p>{caption}</p> : <ItemCaption caption={caption} />}
   </div>
  )
}