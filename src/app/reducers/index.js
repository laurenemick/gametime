import { REQUEST_SEARCH_DATA, RECEIVE_SEARCH_DATA } from "../actions";

export const initialState = {
  events: [],
  performers: [],
  venues: [],
  showItems: false,
  isError: false,
  errorMsg: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_DATA:
      return {
        ...state,
        isError: false,
        errorMsg: "",
      };

    case RECEIVE_SEARCH_DATA:
      return {
          ...state,
          events: action.events,
          performers: action.performers,
          venues: action.venues,
          showItems: action.showItems,
          isError: action.isError,
          errorMsg: action.errorMsg,
      };
      
    default:
      return state;
  }
};
