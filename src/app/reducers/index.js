import { REQUEST_SEARCH_DATA, RECEIVE_SEARCH_DATA, SET_CURR_ITEM } from '../actions';

export const initialState = {
  events: [],
  performers: [],
  venues: [],
  showItems: false,
  isError: false,
  errorMsg: "",
  currItem: {
    id: "",
    image: "", 
    title: "",
    subtitle: "",
  },
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
      
    case SET_CURR_ITEM:
      return {
        ...state,
        currItem: {
          id: action.obj.id,
          image: action.obj.image, 
          title: action.obj.title,
          subtitle: action.obj.subtitle,
        }
    };

    default:
      return state;
  }
};
