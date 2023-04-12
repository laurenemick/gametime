import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Item from './Item';

const Items = () => {
  const { events, performers, venues, showItems } = useSelector(
    state => state
  );
  let results = {}
  const [sorted, setSorted] = useState({})

  const sortItems = () => {
    events.map(event => results[event.meta.sort_order] = ["event", event])
    performers.map(performer => results[performer.meta.sort_order] = ["performer", performer])
    venues.map(venue => results[venue.meta.sort_order] = ["venue", venue])

    const sortItems = Object.keys(results).sort().reduce(
      (obj, key) => { 
        obj[key] = results[key]; 
        return obj;
      }, 
      {}
    );

    setSorted(sortItems)
  }

  useEffect(() => {
    sortItems();
  }, [events, performers, venues])

  return (
    <div style={{visibility: showItems ? "visible" : "hidden" }} className="items-container">
      {
        Object.entries(sorted).length > 0 &&
          Object.entries(sorted).map(([key, value]) => {
            if (value[0] == "event") {
              return <Item id={value[1].event.id} image={value[1].event.map_url} title={value[1].event.name} subtitle={value[1].venue.name} />
            } else if (value[0] == "performer") {
              return <Item id={value[1].id} image={value[1].hero_image_url} title={value[1].name} subtitle={value[1].category} />
            } else if (value[0] == "venue") {
              return <Item id={value[1].id} image={value[1].image_url} title={value[1].name} subtitle={value[1].city} />
            }
          })
      }
    </div>
  )
};

export default Items;
