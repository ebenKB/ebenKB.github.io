import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import EventItem from "../../components/EventItem/EventItem";
import styles from "./styles.module.css";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Axios from "axios";
import { addEvents } from "../../features/events/eventsSlice";
import Loader from '../../components/Loader/Loader';
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";

const Events = props => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const events = useSelector((state) => state.events.data);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const regions = useSelector((state) => state.regions.data);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
    console.log("Filter", value);
    const rem = events.filter((event) =>
      event.acf.region.trim().toLowerCase() === value.trim().toLowerCase());
      console.log("rem: ", rem);
    setFilteredEvents(rem);
  }

  const getEvents = async () => {
    setLoading(true);
    const res = await Axios.get(`https://heritage.bypulse.africa/wp-json/wp/v2/events`);
    dispatch(addEvents(res.data));
    setLoading(false);
    setFilteredEvents(res.data);
  }

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    ReactGA.send({hitType: "pageview", page: window.location.pathname + window.location.search})
  }, []);

  // useEffect(() => {
  //   if (filter !== "") {
  //     const rem = filteredEvents.map((event) => event.acf.region.trim().toLocaleLowerCase() === filter.trim().toLocaleLowerCase());
  //     setFilteredEvents(rem);
  //   }
  // }, [filter]);

  return (
    <>
      <Helmet>
        <title>MTN Herritage App | Events</title>
        <meta name="title" content="MTN Heritage App Events" />
        <meta name="description" content="MTN Heritage app Events" />
        <meta name="keywords" content="MTN Heritage, MTN app, Heritage events, heritage app" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className={styles.wrapper}>
        <h3 className="text-center mt-5 font-bold">Upcoming Events</h3>
        <FormControl  fullWidth variant="outlined" className={styles.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Filter Events by:</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={filter}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {regions && regions.map((region) => (
              <MenuItem value={region.name.trim()}>{region.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {loading && <Loader />}
        {filteredEvents && filteredEvents.map((event) => (
          <div className={styles.item}>
            <EventItem event={event} />
          </div>
          )
        )}
      </div>
    </>
  )
}

Events.propTypes = {

}

export default Events
