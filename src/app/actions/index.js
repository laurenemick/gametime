import axios from 'axios';

export const REQUEST_SEARCH_DATA = 'REQUEST_SEARCH_DATA';
export const RECEIVE_SEARCH_DATA = 'RECEIVE_SEARCH_DATA';
export const SET_CURR_ITEM = 'SET_CURR_ITEM';

export const fetchSearchResults = input => async dispatch => {
  dispatch({
    type: "REQUEST_SEARCH_DATA"
  });

  try {
    const json = await axios.get(`https://mobile-staging.gametime.co/v1/search?q=${input}`)

    dispatch({
      type: "RECEIVE_SEARCH_DATA",
      events: json.data.events,
      performers: json.data.performers,
      venues: json.data.venues,
      showItems: true,
      isError: false,
      errorMsg: "",
    });
  } catch (e) {
    dispatch({
      type: "RECEIVE_SEARCH_DATA",
      events: [],
      performers: [],
      venues: [],
      showItems: false,
      isError: true,
      errorMsg: e,
    });
  }
};

export const setCurrItem = obj => {
  return { type: SET_CURR_ITEM, obj};
};
