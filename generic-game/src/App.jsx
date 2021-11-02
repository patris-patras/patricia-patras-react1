import { useDispatch, useSelector } from 'react-redux';
import { clickClicker } from './actions/creators/ui';
import { Footer, Header } from './components/common';

export const App = () => {
  const clicker = useSelector((state) => {
    const { ui } = state;

    return ui.clicker;
  }); // useSelector = hook din redux care scoate starea
  const dispatch = useDispatch();

  return (
    <>
      <Header></Header>
      <main>
        <div>Value is {clicker}</div>
        <button
          onClick={() => {
            dispatch(clickClicker());
          }}
        >
          test btn
        </button>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;

// src folder structure:
// actions -> {type: '{}, payload: {}}; /types + /creators
// reducers
