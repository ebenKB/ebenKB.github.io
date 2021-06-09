import React from 'react'
import PropTypes from 'prop-types'
import './AppContainer.css';

const AppContainer = ({ children }) => {
  return (
    <div className="app-wrapper">
      {children}
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.object,
}

export default AppContainer
