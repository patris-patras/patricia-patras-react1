import { createContext } from 'react';

export const AppContext = createContext();

export const appState = {
  currentScreen: 'home',
};

// reducer
export const appStateReducer = (appState, { type, payload }) => {
  if (type === 'setScreen') {
    //payload commits to being smthg like 'home', 'products' etc
    return {
      ...appState,
      currentScreen: payload,
    };
  } // ia evenimentul si aplica informatia care a venit din eventul resp

  return appState;
}; // appState = stearea applicatiei, ca acumulatorul;
//type = tip event, payload= informatia; imi reduce tot la o varianta singura a obiectului appState
