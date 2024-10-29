import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', onClick, children }) => {

  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
