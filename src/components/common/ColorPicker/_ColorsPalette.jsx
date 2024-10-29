import styles from './_colorspalette.module.css';

function ColorsPalette({ color, onColor }) {
  return (
    <div
      onClick={() => onColor(color)}
      className={`${styles.tooltipColor} ${styles[color]}`}
    ></div>
  );
}

export default ColorsPalette;
