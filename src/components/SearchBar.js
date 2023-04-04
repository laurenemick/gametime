import { connect } from 'react-redux';
import React from 'react';

import { fetchSearchResults } from '../app/actions';
import Items from './Items';

import { BiSearch } from 'react-icons/bi';

const SearchBar = props => {

  return (
    <div className="seach-bar">
      <div className="input-container">
        <BiSearch className="search-icon" color="#808080" size={28} />
        <input
          className="search-input"
          type="text"
          placeholder="Event, performer or venue"
          onChange={e => props.fetchSearchResults(e.target.value)}
        />
      </div>
      <Items />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events,
    performers: state.performers,
    venues: state.venues,
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchSearchResults: (input) => { dispatch(fetchSearchResults(input)) },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
