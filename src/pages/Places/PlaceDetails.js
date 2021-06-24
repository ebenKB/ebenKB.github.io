import React from 'react';
import PropTypes from 'prop-types';
import HScrollList from "../../components/HorizontalScrollList/HorizontalScrollList";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
// import GoogleMapReact from 'google-map-react';

const PlaceDetails = (props) => {
  const { id } = useParams();
  const place = useSelector((state) => state.places.data.find((p) => p.id == id));
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  return (
    <div>
      { place && (
        <>
          <div className="container pt-5">
            <h3 className="font-bold">{place.acf.title}</h3>
            <img src={place.acf.file} alt="" className="w-full" />
            <p>{place.acf.description}</p>
          </div>
          <div className="p-10 bg-gray-200 mb-5">
          {/* <div style={{ height: '40vh', width: '100%' }}>
            <GoogleMapReact
              // bootstrapURLKeys={{ key:  }}
              defaultCenter={props.center}
              defaultZoom={props.zoom}
            >
              <div
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              >
                hello
              </div>
            </GoogleMapReact>
          </div> */}
          </div>
          <HScrollList />
          <div className="container pt-5">
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
