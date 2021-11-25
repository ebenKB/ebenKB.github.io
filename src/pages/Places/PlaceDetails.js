import React from 'react';
import PropTypes from 'prop-types';
import HScrollList from "../../components/HorizontalScrollList/HorizontalScrollList";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Map from "../../components/GoogleMap/GoogleMap";
import PageHeader from "../../components/PageHeader/PageHeader"

const PlaceDetails = (props) => {
  const { slug } = useParams();
  const place = useSelector((state) => state.places.data.find((p) => p.slug === slug));

  return (
    <div>
      <PageHeader render={() => <h3>Places</h3>} />
      { place && (
        <>
          <div className="container pt-5">
            <h3 className="font-bold">{place.acf.title}</h3>
            <img src={place.acf.file} alt="" className="w-full" />
            <p className="text-justify">{place.acf.description}</p>
          </div>
          <div className="bg-gray-200 mb-5">
            <Map  location={place.acf.map }/>
          </div>
          {/* <div className="mt-5 mb-5">
            <HScrollList />
          </div> */}
          <div className="container pt-5 pb-10 text-justify">
            <p>{place.acf.content}</p>
          </div>
        </>
      )}
    </div>
  )
}

PlaceDetails.propTypes = {
  place: PropTypes.object,
}

export default PlaceDetails
