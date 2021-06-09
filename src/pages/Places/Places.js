import React from 'react'
// import PropTypes from 'prop-types';
import styles from "./style.module.css";
import PlacesItem from "../../components/PlacesItem/PlacesItem";
import SearchInput from "../../components/SearchInput/SearchInput"

const Places = (props) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div className="mb-5">
        <SearchInput />
      </div>
      <div style={{marginBottom: '12px'}}>
        <PlacesItem />
      </div>
      <div style={{marginBottom: '12px'}}>
        <PlacesItem />
      </div>
      <div style={{marginBottom: '12px'}}>
        <PlacesItem />
      </div>
      <div style={{marginBottom: '12px'}}>
        <PlacesItem />
      </div>
    </div>
  )
}

Places.propTypes = {}

export default Places;
