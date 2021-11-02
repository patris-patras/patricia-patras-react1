const initialState = {
  clicker: 0,
};

export const uiReducer = (state = initialState, { type, payload }) => {
  // {type, payload} = action ^^^

  return state; // petru ca e reducer, tre sa scoata mereu starea
};

export default uiReducer;
