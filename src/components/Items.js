import React from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

const Items = props => {
  const { events, performers, venues, showItems } = useSelector(
    state => state
  );
  return (
    <div style={{visibility: showItems ? 'visible' : 'hidden' }} className="items-container">
      {events.slice(0, 3).map((event) => <Item item={event.event} image={event.event.map_url} title={event.event.name} subtitle={event.venue.name} />)}

      {performers.slice(0, 3).map((performer) => <Item item={performer} image={performer.hero_image_url} title={performer.name} subtitle={performer.category} />)}

      {venues.slice(0, 3).map((venue) => <Item item={venue} image={venue.image_url} title={venue.name} subtitle={venue.city} />)}
    </div>
  )
};

export default Items;
