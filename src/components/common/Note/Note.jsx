import styles from './Note.module.css';
import PropTypes from 'prop-types';
/* 
<li className={styles.itemNotes} key={nota.id}>
  <div className={styles.contentNotes}>
    <h3 className={styles.titleNote}>{nota.title}</h3>
    <p className={styles.bodyNotes}>{nota.body}</p>
    <p>{nota.color}</p>
  </div>
  <FooterNote onClickPaleta={handleClickPaleta} idNota={nota.id} />
</li>
*/

const Note = ({ color = '#ffff', tittle, body, children }) => {
  return (
    <li className={styles.list_item} style={{ backgroundColor: color }}>
      <div className={styles.content}>
        <p className={styles.title}>{tittle}</p>
        <p className={styles.list_body}>{body}</p>
      </div>
      {children}
    </li>
  );
};

export default Note;

Note.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  tittle: PropTypes.string,
  body: PropTypes.string,
};
