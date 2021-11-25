import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core';
import styles from "./FixedLoader.module.css";

const FixedLoader = props => {
  return (
  <div className={styles.wrapper}>
    <CircularProgress
      size={50}
      color="default"
      thickness={2}
      className={styles.spinner}
    />
  </div>
  )
}

FixedLoader.propTypes = {

}

export default FixedLoader
