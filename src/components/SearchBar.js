import axios from 'axios';
import React, { useState } from 'react';

import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  const [events, setEvents] = useState([]);
  const [performers, setPerformers] = useState([]);
  const [venues, setVenues] = useState([]);
  const [showItems, setShowItems] = useState(false)

  function handleInputChange(input) {
    if(!input) {
      setEvents([]);
      setPerformers([]);
      setVenues([]);
      setShowItems(false);
    } else {
      axios(`https://mobile-staging.gametime.co/v1/search?q=${input}`)
        .then((res) => {
          setEvents(res.data.events);
          setPerformers(res.data.performers);
          setVenues(res.data.venues);
          setShowItems(true);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  return (
    <div className="seach-bar">
      <div className="input-container">
        <BiSearch className="search-icon" color="#808080" size={28} />
        <input
          className="search-input"
          type="text"
          placeholder="Event, performer or venue"
          onChange={e => handleInputChange(e.target.value)}
        />
      </div>

      <div style={{visibility: showItems ? 'visible' : 'hidden' }} className="items-container">
        {events.slice(0, 3).map((event, i) => {
          return (
          <div className="item-container" key={i}>
            <img className="item-image" src={event.event.map_url} alt="event" />
            <div className="item-description">
              <p className="item-title">{event.event.name}</p>
              <p className="item-subtitle">{event.venue.name}</p>
            </div>
          </div>
          )
        })}

        {performers.slice(0, 3).map((performer, i) => {
          return (
            <div className="item-container" key={i}>
              <img className="item-image" src={performer.hero_image_url} alt="performer" />
              <div className="item-description">
                <p className="item-title">{performer.name}</p>
                <p className="item-subtitle uppercase">{performer.category}</p>
              </div>
            </div>
          )
        })}

        {venues.slice(0, 3).map((venue, i) => {
          return (
            <div className="item-container" key={i}>
              <img className="item-image" src={venue.image_url} alt="venue" />
              <div className="item-description">
                <p className="item-title">{venue.name}</p>
                <p className="item-subtitle">{venue.city}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SearchBar;
