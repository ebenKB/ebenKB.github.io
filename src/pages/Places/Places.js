import React, { useEffect } from 'react'
// import PropTypes from 'prop-types';
import styles from "./style.module.css";
import PlacesItem from "../../components/PlacesItem/PlacesItem";
import SearchInput from "../../components/SearchInput/SearchInput"
import { useDispatch, useSelector } from 'react-redux';
import { addPlaces } from '../../features/places/placesSlice';
import axios from 'axios';

const Places = (props) => {
  const places = useSelector((state) => state.places.data);
  const category = useSelector((state) =>
    state.categories.data.find((cat) => cat.slug === "places"));
  const dispatch = useDispatch();

  const getPlaces = async () => {
    const res = await axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/posts?per_page=10&categories=${category.id}`);
    dispatch(addPlaces(res.data))
  }

  useEffect(() => {
    getPlaces();
  }, [category]);

  return (
    <div className={`${styles.wrapper}`}>
      <div className="mb-5">
        <SearchInput />
      </div>
      {places.map((place) => (
        <span>{place.content.rendered}</span>
      ))}
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
