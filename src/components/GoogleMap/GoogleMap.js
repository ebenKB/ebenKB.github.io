import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

const onLoad = marker => {
  console.log('marker: ', marker)
}

function Map({ location }) {
  return (
    <LoadScript
      // googleMapsApiKey="AIzaSyB03GjY1G4StwZBxs5D9OIeYyzTMnwR80A"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        <Marker
          onLoad={onLoad}
          position={location}
        />
        </>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
