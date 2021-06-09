import React from 'react'
// import PropTypes from 'prop-types';
import AppContainer from '../components/AppContainer/AppContainer'
import LatestUpdate from '../components/LatestUpdate/LatestUpdate'
import HorizontalScrollList from '../components/HorizontalScrollList/HorizontalScrollList'
import Carousel from "../components/Carousel/Carousel";
import Trends from "../components/Trends/Trends";

const Home = props => {
  return (
    <div>
      <Carousel />
      <AppContainer>
        <Trends />
        <LatestUpdate />
        <HorizontalScrollList />
      </AppContainer>
    </div>
  )
}

Home.propTypes = {

}

export default Home