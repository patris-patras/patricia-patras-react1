import { SiLetterboxd } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../ui/Button';
import { requestSignOut, requestSignIn } from '../../actions/creators/auth';
import { FaUserAlt } from 'react-icons/fa';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useAuth } from './../../hooks';

export const Header = () => {
  const dispatch = useDispatch();
  const { authenticated, established } = useAuth();

  const renderUserControls = () => {
    if (!established) {
      return <CgSpinnerTwo className="animate-spin"></CgSpinnerTwo>;
    }

    if (authenticated) {
      return (
        <>
          <Link to="/profile" title="Profile">
            <Button element="span" className="inline-flex h-full items-center">
              <FaUserAlt></FaUserAlt>
            </Button>
          </Link>

          <Button
            skin="primaryInverted"
            type="button"
            title="Log out"
            onClick={() => {
              dispatch(requestSignOut());
            }}
            className="ml-2"
          >
            Log out
          </Button>
        </>
      );
    } else {
      return (
        <Button
          type="button"
          title="Log in"
          onClick={() => {
            dispatch(requestSignIn());
          }}
          className="drilldown demo"
        >
          Log in
        </Button>
      );
    }
  };

  return (
    <header className="shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <header>
          <h1 className="uppercase text-lg font-bold">
            <Link to="/" title="Go home" className="flex items-center">
              <SiLetterboxd className="mr-2"></SiLetterboxd>
              Word Game
            </Link>
          </h1>
        </header>

        <div>{renderUserControls()}</div>
      </div>
    </header>
  );
};

export default Header;
