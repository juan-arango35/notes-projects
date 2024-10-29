import { useEffect, useState } from 'react';
import NoteList from '../NoteList/NoteList';
import { getNotesApi } from 'src/api/getNotasApi';
import PropTypes from 'prop-types';

const TrashView = ({ username }) => {
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
    <div>
      {notes.filter((note) => note.deleted).length > 0 ? (
        <NoteList
          onSubmitNote={handleSubmitNote}
          notesRaw={notes}
          username={username}
          variant="trashView"
        />
      ) : (
        <h1>No Notes</h1>
      )}
    </div>
  );
};

export default TrashView;

TrashView.propTypes = {
  username: PropTypes.string,
};
