import { createContext, useEffect, useReducer } from 'react';
import { initialState, apiReducer } from '../reducers/apiReducer';
import TYPES from '../actions/apiReducerTypes';
import httpClient from '../libs/httpClient';
import config from '../config/config';

export const apiData = createContext();

export const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  let pokemonData = {};
  
  useEffect(() => {
    const random = Math.round(Math.random() * 1000);
    random.toString();
    getPokemonsData(random);
  }, []);
  
  const getPokemonsData = async (keywoard) => {
    const data = await httpClient(`${config.API_URL}/pokemon/${keywoard}`);
    const pokemonSpecies = await httpClient(`${config.SPECIES_URL}/${data.id}/`);
    const pokemonColor = await httpClient(pokemonSpecies.color.url);
    
    pokemonData = {
      ...data,
      pokemonSpecies,
      pokemonColor
    }
    
    dispatch({ type: TYPES.SEARCH_ID, payload: pokemonData });
  };

  const setColors = (colors) => {
    dispatch({ type: TYPES.SET_IMAGE_COLORS, payload: colors })
  }
  
    const value = {
      state,
      dispatch,
      getPokemonsData,
      setColors
    }
  
    return (
      <apiData.Provider value={value}>
        {children}
      </apiData.Provider>
    )  
};