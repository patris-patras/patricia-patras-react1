import { UserStats } from '../components/profile';
import { Button } from '../components/ui';
import { useAuth, useStats } from '../hooks';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const { authenticated, established } = useAuth();
  const stats = useStats(); // ca sa fol. spread in componenta mea de UserStats; basically e: const {gamesWon, gamesLost, gamesPlayed} = useStats();

  return (
    <div className="p-4 container mx-auto">
      <h1>Welcome to Generic Game (a.k.a GiGi)</h1>
      {!established ? (
        '...add spinner here'
      ) : authenticated ? (
        <>
          <UserStats
            {...stats}
            className="mt-8"
            entryClassName="p-5"
          ></UserStats>
          <div className="mt-2 text-center">
            <Button title="Play now" element="span">
              <Link to="/play">Play</Link>
              {/* Play */}
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <button
            className="w-75 md:max-w-xl w-3/4 py-20 border rounded-md shadow hover:bg-gray-100"
            type="button"
            title="Login"
          >
            Login to get started
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
