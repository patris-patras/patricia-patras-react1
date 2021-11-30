import { useState } from 'react';
import { Authorize } from '../components/auth';
import { Creature } from '../components/profile';
import { Button } from '../components/ui';

export const GamePage = () => {
  const [gameState, setGameState] = useState({
    playing: false,
  });
  const { playing } = gameState;

  return (
    <div className="p-4 container mx-auto">
      <Authorize>
        {/* ^^^ pe Authorize as introduce roles daca as avea roles={['admin', 'editor']} */}
        <div className="w-full md:w8/12 mb-2 px-5 flex items-center justify-around">
          {playing ? (
            <>
              <Button title="Win game" type="button" onClick={() => {}}>
                Games won
              </Button>
              <Button
                title="Lose game"
                type="button"
                skin="dangerInverted"
                onClick={() => {}}
              >
                Games lost
              </Button>
              <Button
                title="Quit"
                type="button"
                skin="danger"
                onClick={() => {}}
              >
                Quit
              </Button>
            </>
          ) : (
            <Button
              title="Start game"
              type="button"
              onClick={() => {
                setGameState({ playing: true });
              }}
            >
              Start game
            </Button>
          )}
        </div>

        <div className="w-full md:w4/12 flex flex-col items-center justify-center">
          <Creature></Creature>
        </div>
      </Authorize>
    </div>
  );
};

export default GamePage;
