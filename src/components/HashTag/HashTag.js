import React from 'react'
import PropTypes from 'prop-types'
import styles from "./styles.module.css";
import { useSelector } from 'react-redux';

const HashTag = ({ rawTags = [] }) => {
  const tags = useSelector((state) => state.tags.tags);

  const getTagNames  = () => {
    let transformedTags = []
    if (rawTags.length > 0) {
      for (const tag of rawTags) {
        const foundTag = tags.find((x) => x.id == tag);
        if (foundTag) {
          transformedTags = [...transformedTags, foundTag.name]
        }
      }
    }
    return transformedTags;
  };

  return (
    <div className={styles.wrapper}>
      {getTagNames().map((tag) => (
        <span className={styles.tag}>{tag}</span>
      ))}
    </div>
  )
}

HashTag.propTypes = {
  tags: PropTypes.array.isRequired,
}

export default HashTag
