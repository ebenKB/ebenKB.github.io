import React from 'react'
import PropTypes from 'prop-types'
import styles from "./styles.module.css";

const HashTag = ({ tags = [] }) => {
  return (
    <div className={styles.wrapper}>
      {tags.map((tag) => (
        <span className={styles.tag}>{tag}</span>
      ))}
    </div>
  )
}

HashTag.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default HashTag
