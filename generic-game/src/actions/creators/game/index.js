import { GAME_STARTED, GAME_ENDED } from '../../types/games';

export const gameStarted = () => {
  return {
    action: GAME_STARTED,
  };
};

export const gameEnded = () => {
  return {
    action: GAME_ENDED,
  };
};
