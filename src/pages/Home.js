import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types';
import AppContainer from '../components/AppContainer/AppContainer'
import LatestUpdate from '../components/LatestUpdate/LatestUpdate'
import Carousel from "../components/Carousel/Carousel";
import LatestVideos from '../components/LatestVideos/LatestVideos';
import PageHeader from "../components/PageHeader/PageHeader"

const Home = props => {
  return (
    <>
      <PageHeader render={() => <span className="font-bold">Our Heritage, Our Culture</span>} />
      <Carousel />
      <AppContainer>
        {/* <Trends /> */}
        <LatestUpdate />
        <LatestVideos />
      </AppContainer>
    </>
  )
}

Home.propTypes = {};

export default Home