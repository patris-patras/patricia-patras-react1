import { CLICKER_CLICK } from '../actions/types/ui';

const initialState = {
  clicker: 0,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  // {type, payload} = action ^^^

  switch (type) {
    case CLICKER_CLICK:
      const newState = {};

      newState.clicker = state.clicker + payload;
      return newState;
    default:
      return state;
  }
  // pentru ca e reducer, tre sa scoata mereu starea
};

export default uiReducer;
