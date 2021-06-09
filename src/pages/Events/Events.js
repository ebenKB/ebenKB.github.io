import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import EventItem from "../../components/EventItem/EventItem";
import styles from "./styles.module.css";
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const Events = props => {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  }

  return (
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
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <div className={styles.item}>
        <EventItem />
      </div>
      <div className={styles.item}>
        <EventItem />
      </div>
      <div className={styles.item}>
        <EventItem />
      </div>
      <div className={styles.item}>
        <EventItem />
      </div>
      <div className={styles.item}>
        <EventItem />
      </div>
    </div>
  )
}

Events.propTypes = {

}

export default Events
