import styles from './Menu.module.css';
import PropTypes from 'prop-types';
import vectorSVG from '@assets/Vector.svg';
import trashSVG from '@assets/TrashMenu.svg';

const Menu = ({ onTabChange, currentTab }) => {
  const handleClick = (id) => {
    console.log('click en li:', id);
    onTabChange(id);
  };
  return (
    <nav>
      <ul>
        <li
          onClick={() => handleClick('notesTap')}
          className={`${styles.nav_item} ${
            currentTab === 'notesTap' && styles.nav_active
          }`}
        >
          <img src={vectorSVG} />
          <span>Notes</span>
        </li>
        <li
          onClick={() => handleClick('trashTap')}
          className={`${styles.nav_item} ${
            currentTab === 'trashTap' && styles.nav_active
          }`}
        >
          <img src={trashSVG} />
          <span>Trash</span>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

Menu.propTypes = {
  onTabChange: PropTypes.func,
  currentTab: PropTypes.string,
};
