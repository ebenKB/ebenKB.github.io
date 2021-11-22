import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
import styles from "./style.module.css";
import PlacesItem from "../../components/PlacesItem/PlacesItem";
import SearchInput from "../../components/SearchInput/SearchInput"
import { useDispatch, useSelector } from 'react-redux';
import { addPlaces } from '../../features/places/placesSlice';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import Loader from '../../components/Loader/Loader';
import ReactGA from "react-ga4";
import { Helmet} from "react-helmet";

const Places = (props) => {
  const [loading, setLoading] = useState(false);
  const places = useSelector((state) => state.places.data);
  const category = useSelector((state) =>
    state.categories.data.find((cat) => cat.slug === "places"));
  const dispatch = useDispatch();

  const getPlaces = async () => {
    setLoading(true);
    const res = await axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/places`);
    dispatch(addPlaces(res.data));
    setLoading(false);
  }

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search})
  }, []);

  useEffect(() => {
    getPlaces();
  }, [category]);

  return (
    <>
      <Helmet>
        <title>MTN Herritage App | Places</title>
        <meta name="title" content="MTN Heritage App Places" />
        <meta name="description" content="MTN Heritage app Places" />
        <meta name="keywords" content="MTN Heritage, MTN app, Heritage places, Heritage place, app place, app places,  heritage app" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className={`${styles.wrapper}`}>
        <h3>Places</h3>
        {loading && <Loader />}
        {/* <div className="mb-5">
          <SearchInput />
        </div> */}
        {places.map((place) => (
          <div style={{marginBottom: '12px'}} key={place.id}>
            <PlacesItem place={place} />
          </div>
        ))}
      </div>
    </>
  )
}

Places.propTypes = {}

export default Places;
