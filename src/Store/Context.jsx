import { createStore } from 'redux';
import data from '../data.json';

const initialState = {
  produits: {
    femmes: data.femmes,
    hommes: data.hommes,
    filles: data.filles,
    garcons: data.garcons,
  },
  panier: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AJOUTER':
      return {
        ...state,
        panier: [...state.panier, action.payload],
      };
    case 'SUPPRIMER':
      return {
        ...state,
        panier: state.panier.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
