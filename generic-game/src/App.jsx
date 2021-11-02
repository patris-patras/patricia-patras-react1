import { Footer, Header } from './components/common';

export const App = () => {
  return (
    <>
      <Header></Header>
      <main>
        <button onClick={() => {}}>test btn</button>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;

// src folder structure:
// actions -> {type: '{}, payload: {}}; /types + /creators
// reducers
