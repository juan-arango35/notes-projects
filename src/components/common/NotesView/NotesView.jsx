import { useEffect, useState } from 'react';
import NoteForm from '../NoteForm/NoteForm';
import NoteList from '../NoteList/NoteList';
import { getNotesApi } from 'src/api/getNotasApi';
import PropTypes from 'prop-types';
import styles from './NotesView.module.css';

const NotesView = ({ username }) => {
  const [notes, setNotes] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    username &&
      getNotesApi(username).then((data) => {
        setNotes(data.notes);
      });
    return () => {
      setIsUpdate(false);
    };
  }, [username, isUpdate]);

  function handleSubmitNote(isSaved) {
    if (isSaved) {
      setIsUpdate(true);
    }
  }

  return (
    <div className={styles.notes_view}>
      <NoteForm onSubmitNote={handleSubmitNote} username={username} />
      {notes.filter((note) => !note.deleted).length > 0 ? (
        <NoteList
          onSubmitNote={handleSubmitNote}
          notesRaw={notes}
          username={username}
          variant={'notesView'}
        />
      ) : (
        <h1>No Notes</h1>
      )}
    </div>
  );
};

export default NotesView;

NotesView.propTypes = {
  username: PropTypes.string,
};
