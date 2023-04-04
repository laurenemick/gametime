import axios from 'axios';

export const REQUEST_SEARCH_DATA = "REQUEST_SEARCH_DATA";
export const RECEIVE_SEARCH_DATA = "RECEIVE_SEARCH_DATA";

export const fetchSearchResults = input => async dispatch => {
  dispatch({
    type: "REQUEST_SEARCH_DATA"
  });
  console.log("hit fetch api")
  try {
    const json = await axios.get(`https://mobile-staging.gametime.co/v1/search?q=${input}`)
    console.log("json", json.data)
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
