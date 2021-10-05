import TYPES from '../actions/apiReducerTypes';
import config from '../config/config';

const initialState = {
  pokeData: {},
  colors: []
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SEARCH_ID: {
      return {
        ...state,
        pokeData: action.payload
      }
    }

    case TYPES.SET_IMAGE_COLORS: {
      return {
        ...state,
        colors: action.payload
      }
    }
    
    default:
      return state
  }
}

export {initialState, apiReducer}