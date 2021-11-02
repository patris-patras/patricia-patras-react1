import { CLICKER_CLICK } from '../../types/ui';

export const clickClicker = (payload = 1) => {
  return {
    type: CLICKER_CLICK,
    payload, // KIND reminder: payload: payload
  };
};
