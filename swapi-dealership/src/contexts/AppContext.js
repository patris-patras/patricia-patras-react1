import { createContext } from 'react';

export const AppContext = createContext();

export const appState = {
  currentScreen: 'home',
  selected: null,
  searchResults: [],
  cart: [],
};

export const appStateReducer = (appState, { type, payload }) => {
  if (type === 'setScreen') {
    // payload commits to being something like 'home' 'products' etc...
    return {
      ...appState,
      currentScreen: payload,
    };
  } // ia evenimentul si aplica informatia care a venit din eventul resp

  if (type === 'setSelected') {
    return {
      ...appState,
      selected: payload,
    };
  }

  if (type === 'setSearchResults') {
    return {
      ...appState,
      searchResults: payload,
    };
  }

  if (type === 'addToCart') {
    return {
      ...appState,
      cart: [...appState.cart, payload],
    };
  }

  return appState;
}; // appState = stearea applicatiei, ca acumulatorul;
//type = tip event, payload= informatia; imi reduce tot la o varianta singura a obiectului appState
