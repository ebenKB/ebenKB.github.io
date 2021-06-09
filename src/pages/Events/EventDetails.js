import React from 'react'
// import PropTypes from 'prop-types'
import HScroll from "../../components/HorizontalScrollList/HorizontalScrollList";
import HashTag from "../../components/HashTag/HashTag";

const EventDetails = props => {
  return (
    <div>
      <div className="container pt-5">
        <h3 className="font-bold">The Asafoatse Palace</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dicta saepe debitis corporis. Ad libero voluptate, 
          minima explicabo quam, odio beatae esse quia,
        </p>
        <p className="text-gray-400">25th May, 2021</p>
      </div>
      <div className="p-12 bg-gray-300">
        insert map here
      </div>
      <div className="container mt-5">
        <h3 className="font-bold mt-5">Pictures from Asafoatse Palace</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consectetur nulla dolorem eveniet harum porro, ipsam recusandae 
          odit exercitationem provident ut saepe, expedita quis nostrum! 
          Laboriosam, iste. Vitae et eius quidem.
        </p>
        <HScroll />
        <div className="mt-2 pb-12">
          <HashTag tags={["#tag1", "#tag2"]} />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Molestiae, distinctio eligendi sint quia non doloremque magni
            itaque et dolorum optio beatae expedita perferendis dolorem
            praesentium nulla eaque natus? Quidem, facere.
          </p>
        </div>
      </div>
    </div>
  )
}

EventDetails.propTypes = {

}

export default EventDetails
