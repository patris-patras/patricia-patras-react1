import { useSelector } from 'react-redux';
import { useProfileColors } from '../../hooks';
import './Creature.css';

export const Creature = () => {
  const { mainColor, secondaryColor, eyeColor } = useProfileColors();

  return (
    <div
      className="creature"
      style={{
        backgroundColor: mainColor,
        borderColor: secondaryColor,
      }}
    >
      <div className="creature__eyes">
        <div className="eye eye--blinking creature__eye creature__eye--left">
          <div
            className="eye__iris"
            style={{
              backgroundColor: eyeColor,
            }}
          ></div>

          <div
            className="eye__lid"
            style={{
              backgroundColor: secondaryColor,
            }}
          ></div>
        </div>

        <div className="eye eye--blinking creature__eye creature__eye--right">
          <div
            className="eye__iris"
            style={{
              backgroundColor: eyeColor,
            }}
          ></div>

          <div
            className="eye__lid"
            style={{
              backgroundColor: secondaryColor,
            }}
          ></div>
        </div>
      </div>

      <div className="creature__nose-line">
        <div
          className="nose creature__nose"
          style={{
            backgroundColor: secondaryColor,
            borderColor: mainColor,
          }}
        >
          <div
            className="nose__nostril nose__nostril--left"
            style={{
              backgroundColor: mainColor,
            }}
          ></div>

          <div
            className="nose__nostril nose__nostril--right"
            style={{
              backgroundColor: mainColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Rust

export default Creature;
