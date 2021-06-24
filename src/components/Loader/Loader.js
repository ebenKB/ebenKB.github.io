import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'

const Loader = props => {
  return (
  <div style={{width: "100%", textAlign: "center", marginTop: "20px"}}>
    <CircularProgress
      size={50}
      color="default"
      style={{textAlign: "center", padding: "4px"}}
    />
  </div>
  )
}

Loader.propTypes = {

}

export default Loader
