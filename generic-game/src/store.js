import { compose, createStore } from 'redux';
import reducers from './reducers';

// recipe redux dev tools vvv
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;
