import { GAME_ENDED, GAME_STARTED } from '../../types/games/index';

export const gameStarted = () => {
  return {
    type: GAME_STARTED,
  };
};

export const gameEnded = () => {
  return {
    type: GAME_ENDED,
  };
};
