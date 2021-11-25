import React from 'react'
import PropTypes from 'prop-types'
import styles from "./style.module.css";

const YoutubeEmbed = ({ embedId, title }) => {
  return (
    <>
      <div className={`${styles.embed_wrapper} video-responsive`}>
        <iframe
          width="100%"
          height="240"
          src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
        <h3 className={`font-bold ${styles.title}`} dangerouslySetInnerHTML={{__html: title}}/>
      </div>
      <div className={`${styles.embed_offset}`}/>
    </>
  )
}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
}

export default YoutubeEmbed

