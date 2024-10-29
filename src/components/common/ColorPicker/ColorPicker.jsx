import ColorsPalette from './_ColorsPalette';
import paletColor from './_paletColor.svg';
import styles from './_ColorPicker.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function ColorPicker({ onChangeColor }) {
  const backgroundColors = {
    white: 'white',
    red: '#f28b82',
    orange: '#fbbc04',
    yellow: '#fff475',
    green: '#ccff90',
    cian: '#a7ffeb',
    blue: '#cbf0f8',
    azure: '#aecbfa',
    purple: '#d7aefb',
    pink: '#fdcfe8',
  };

  const [showColorsPalette, setShowColorsPalette] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  function setColor(color) {
    console.log(color);
    // editNote(id, { color: color });
    setShowColorsPalette(!showColorsPalette);
    setBackgroundColor(backgroundColors[color]);
    onChangeColor(backgroundColors[color]);
  }

  return (
    <div
      className={styles.App} /* style={{ backgroundColor: backgroundColor }} */
    >
      <div className={styles.wrapper}>
        {showColorsPalette && (
          <div className={styles.colors}>
            {Object.keys(backgroundColors).map((color) => (
              <ColorsPalette
                key={Math.random()}
                color={color}
                onColor={setColor}
              />
            ))}
          </div>
        )}
        <img
          onClick={() => setShowColorsPalette(!showColorsPalette)}
          src={paletColor}
          alt="Colors Palette"
        />
      </div>
    </div>
  );
}

ColorPicker.propTypes = {
  onChangeColor: PropTypes.func,
};
