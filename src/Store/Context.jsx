// store.js
import { createStore } from 'redux';

const initialState = {
  data: {
    femmes: [],
    hommes: [],
    filles: [],
    garcons: []
  },
  panier: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      };
    case 'ADD_TO_PANIER':
      return {
        ...state,
        panier: [...state.panier, action.payload]
      };
    case 'REMOVE_FROM_PANIER':
      return {
        ...state,
        panier: state.panier.filter((_, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;