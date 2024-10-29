import styles from './EditModal.module.css';
import PropTypes from 'prop-types';

const EditModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  onClose(); /* <-- este porcion de codigo no tiene nada de efecto */
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default EditModal;

EditModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
