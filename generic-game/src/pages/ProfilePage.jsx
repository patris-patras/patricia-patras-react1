import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProfileForm, Creature } from '../components/profile';
import { useAuth } from '../hooks';

export const ProfilePage = () => {
  const history = useHistory();
  const { authenticated, established } = useAuth();

  useEffect(() => {
    if (!authenticated && established) {
      history.push('/');
    }
  }, [authenticated, history, established]);

  return (
    <div className="container mx-auto p-4">
      <header>
        <h1>Username</h1>
      </header>

      <section className="flex justify-between flex-wrap mt-8">
        <div className="w-full md:w-8/12">
          {/* create UserProfile component, and populate it with info from the store */}
        </div>

        <div className="w-full md:w-4/12 flex justify-center mt-8 md:mt-0">
          <Creature></Creature>
        </div>
      </section>

      {established ? (
        <section className="mt-4 md:w-1/4 md:mt-12 mx-auto">
          <ProfileForm></ProfileForm>
        </section>
      ) : (
        '...logging you in'
      )}
    </div>
  );
};

export default ProfilePage;
