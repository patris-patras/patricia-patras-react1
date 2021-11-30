import { useAuth } from '../../hooks';

export const Authorize = ({ children }) => {
  const { authenticated, established } = useAuth();

  return (
    <>
      {!established
        ? '...logging you in'
        : authenticated
        ? children
        : 'Please log in'}
    </>
  );
};
