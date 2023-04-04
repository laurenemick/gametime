import axios from 'axios';
import React, { useState } from 'react';

import Items from './Items';

import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  const [events, setEvents] = useState([]);
  const [performers, setPerformers] = useState([]);
  const [venues, setVenues] = useState([]);
  const [showItems, setShowItems] = useState(false);

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
      <Items events={events} performers={performers} venues={venues} showItems={showItems} />
    </div>
  );
};

export default SearchBar;
