import React from 'react'
// import PropTypes from 'prop-types'
import HScroll from "../../components/HorizontalScrollList/HorizontalScrollList";
import HashTag from "../../components/HashTag/HashTag";
import Map from "../../components/GoogleMap/GoogleMap";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from "date-fns";


const EventDetails = props => {
  const { id } = useParams();
  const events = useSelector((state) => state.events.data);
  const upcomingEvents = events.filter((event) => event.id != id);
  const event = events.find((event) => event.id == id);
  const tags = useSelector((state) => state.tags.tags);

  const transformEvents = (events) => {
    return events.map((event) => ({
      imageUrl: event.acf.pictures,
      caption: event.acf.title,
      id: event.id
    }))
  }

  // const getTagNames  = () => {
  //   let transformedTags = []
  //   if (event.tags.length > 0) {
  //     for (const tag of event.tags) {
  //       console.log("Tag data", tag, tags)
  //       const foundTag = tags.find((x) => x.id == tag);
  //       console.log("Found tag", foundTag)
  //       transformedTags = [...transformedTags, foundTag.name]
  //     }
  //   }
  //   return transformedTags;
  // };

  return (
    <div>
      <div className="container pt-5">
        <h3 className="font-bold" dangerouslySetInnerHTML={{__html:event.acf.title}} />
        <p>{event.acf.description}</p>
        <p className="text-gray-400">
          {format(new Date(event.acf.date_of_event), "eee, do MMMM yyyy")}
          <span>&nbsp;{event.acf.time_of_event}</span>
        </p>
      </div>
        {event.acf.location && (
          <div className="bg-gray-300">
            <Map  location={event.acf.location }/>
          </div>
        )}
      <div className="container mt-5">
        {/* <h3 className="font-bold mt-5">Pictures from Asafoatse Palace</h3> */}
        <p dangerouslySetInnerHTML={{__html: event.acf.content}}  className="mt-5" />
        <div className="mt-2 pb-12">
          <HashTag rawTags={event.tags} />
        </div>
        {transformEvents.length > 0 && (
          <>
            <h3>Related Events</h3>
            <HScroll path="events" items={transformEvents(upcomingEvents)} />
          </>
        )}
        <div className="mt-2 pb-12">
          {/* <HashTag tags={["#tag1", "#tag2"]} /> */}
        </div>
      </div>
    </div>
  )
}

EventDetails.propTypes = {

}

export default EventDetails
