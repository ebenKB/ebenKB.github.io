import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import HScroll from "../../components/HorizontalScrollList/HorizontalScrollList";
import HashTag from "../../components/HashTag/HashTag";
import Map from "../../components/GoogleMap/GoogleMap";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from "date-fns";
import { scrollToTop } from '../../utils/app';
import PageHeader from '../../components/PageHeader/PageHeader';

const EventDetails = (props) => {
  const { slug } = useParams();
  const events = useSelector((state) => state.events.data);
  const upcomingEvents = events.filter((event) => event.slug !== slug);
  const event = events.find((event) => event.slug === slug);
  // const tags = useSelector((state) => state.tags.tags);

  const transformEvents = (events) => {
    return events.map((event) => ({
      imageUrl: event.acf.pictures,
      caption: event.acf.title,
      id: event.id,
      slug: event.slug,
    }))
  }

  useEffect(() => {
    scrollToTop()
  }, [event])

  return (
    <div>
      <PageHeader render={() => (
        <h3>Events</h3>
      )} />
      <div className="container pt-5">
        <h3 className="font-bold" dangerouslySetInnerHTML={{__html:event.acf.title}} />
        <p className="text-justify">{event.acf.description}</p>
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
        <p dangerouslySetInnerHTML={{__html: event.acf.content}}  className="mt-5 text-justify" />
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

EventDetails.propTypes = {}

export default EventDetails
