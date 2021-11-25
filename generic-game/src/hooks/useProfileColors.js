import { useSelector } from 'react-redux';

export const useProfileColors = () => {
  const creature = useSelector(({ profile }) => {
    return profile.creature;
  });

  return creature;
};

// selector fct are memoized in state slices in modern redux
