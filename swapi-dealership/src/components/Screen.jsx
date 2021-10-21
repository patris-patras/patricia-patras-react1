import Products from './Products';
import Product from './Product';

const componentMap = {
  home: Products,
  productPage: Product,
};

export const Screen = ({ screen = 'home' }) => {
  if (!screen || typeof componentMap[screen] === 'undefined') {
    return <componentMap.home></componentMap.home>;
  } // ce sa faca cand nu am ecran -> redirect pe HP

  const CurrentComponent = componentMap[screen];

  return <CurrentComponent></CurrentComponent>;
};

export default Screen;
