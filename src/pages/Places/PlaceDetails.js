import React from 'react';
import PropTypes from 'prop-types';
import HScrollList from "../../components/HorizontalScrollList/HorizontalScrollList";

const PlaceDetails = ({ place }) => {
  return (
    <div>
      <div className="container pt-5">
        <h3 className="font-bold">Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quo quas debitis, officia sed reiciendis deserunt quaerat nulla voluptas, 
          necessitatibus repellendus ut ab libero cumque ipsum obcaecati impedit eum adipisci ullam.
        </p>
      </div>
      <div className="p-10 bg-gray-200 mb-5">insert map here</div>
      <HScrollList />
      <div className="container pt-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Laborum quia ex accusamus minima? Quam id fugiat obcaecati iste, 
          dolorum quae totam aspernatur, ipsa, repellat est earum exercitationem quidem adipisci tempora?
        </p>
      </div>
    </div>
  )
}

PlaceDetails.propTypes = {
  place: PropTypes.object,
}

export default PlaceDetails
