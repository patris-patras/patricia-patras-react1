import { useDispatch, useSelector } from 'react-redux';
import { patchGameLost, patchGameWon } from '../actions/creators/profile';
import { Authorize } from '../components/auth';
import { Creature } from '../components/profile';
import { Button } from '../components/ui';
import { gameEnded, gameStarted } from './../actions/creators/game';

export const GamePage = () => {
  const dispatch = useDispatch();
  const { playing } = useSelector(({ game }) => {
    return game;
  });

  return (
    <div className="p-4 container flex mx-auto">
      <Authorize>
        {/* ^^^ pe Authorize as introduce roles daca as avea roles={['admin', 'editor']} */}
        <div className="w-full mb-2 md:w-8/12 flex items-center justify-around">
          {playing ? (
            <>
              <Button
                title="Win game"
                type="button"
                onClick={() => {
                  dispatch(patchGameWon());
                  dispatch(gameEnded());
                }}
              >
                Win game
              </Button>
              <Button
                title="Lose game"
                type="button"
                skin="dangerInverted"
                onClick={() => {
                  dispatch(gameEnded());
                }}
              >
                Lose game
              </Button>
              <Button
                title="Quit"
                type="button"
                skin="danger"
                onClick={() => {
                  dispatch(gameEnded());
                }}
              >
                Quit
              </Button>
            </>
          ) : (
            <Button
              title="Start Game"
              type="button"
              onClick={() => {
                dispatch(patchGameLost());
                dispatch(gameStarted());
              }}
            >
              Start Game
            </Button>
          )}
        </div>

        <div className="w-full md:w-4/12 flex flex-col items-center justify-center">
          <Creature></Creature>
        </div>
      </Authorize>
    </div>
  );
};

export default GamePage;
