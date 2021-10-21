import { useReducer, useState } from 'react';
import Screen from './components/Screen';
import { AppContext, appState, appStateReducer } from './contexts/AppContext';
import MetaImage from './legacy/Metaimage';
import Search from './legacy/Search';

const App = () => {
  const [state, dispatch] = useReducer(appStateReducer, appState);
  const contextValue = {
    state: state, // = starea globala a app mele
    dispatch: dispatch, // = fct cu care pot trimite events
  };

  const { currentScreen } = state;

  return (
    <AppContext.Provider value={contextValue}>
      <header className="nav-bar-dark fixed-top bg-dark border-bottom border-warning">
        <nav className="container d-flex justify-content-between">
          <h1 className="display-6 text-warning">Swapi DealerSHIP</h1>

          <Search></Search>
        </nav>
      </header>

      <main className="container mt-7 mb-4">
        <button
          onClick={() => {
            dispatch({ type: 'setScreen', payload: 'productPage' });
          }}
        >
          to products page
        </button>
        <Screen screen={currentScreen}></Screen>
      </main>

      <footer className="container mb-4">footer</footer>
    </AppContext.Provider> // => un obj 'AppContext' cu o proprietate 'Provider'
  );
};

export default App;
