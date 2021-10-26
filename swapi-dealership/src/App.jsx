import { useReducer } from 'react';
import FooterNav from './components/FooterNav';
import Screen from './components/Screen';
import { AppContext, appState, appStateReducer } from './contexts/AppContext';
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
      <header className="navbar-dark fixed-top bg-dark border-bottom border-warning">
        <nav className="container d-flex justify-content-between">
          <h1 className="display-6 text-warning">Swapi Vehicles</h1>

          <Search className="d-inline-flex align-self-center"></Search>
        </nav>
      </header>

      <main className="container mt-7 mb-4">
        <Screen screen={currentScreen}></Screen>
      </main>

      <footer className="container mb-4">
        <FooterNav></FooterNav>
      </footer>
    </AppContext.Provider> // => un obj 'AppContext' cu o proprietate 'Provider'
  );
};

export default App;
