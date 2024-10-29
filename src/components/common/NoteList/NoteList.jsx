import { useEffect, useState } from 'react';
import styles from './NoteList.module.css';
import FooterNote from '../FooterNote/FooterNote';
import Note from '../Note/Note';
import { patchNotaApi } from '../../../api/patchNotaApi';
import PropTypes from 'prop-types';
import { deleteNotaApi } from '../../../api/deleteNotaApi';

const NoteList = ({ onSubmitNote, notesRaw, username, variant }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(notesRaw);
  }, [notesRaw]);

  const handleChangePalette = (color, idNota) => {
    const updateNotes = notes.map((nota) => {
      if (nota.id === idNota) {
        return { ...nota, color: color };
      }
      return nota;
    });
    //api request to change color
    patchNotaApi(username, idNota, {
      color: color,
    });
    //update state
    setNotes(updateNotes);
  };

  const handleClickTrash = (idNota) => {
    let toggleDeleted;
    const updateNotes = notes.map((nota) => {
      if (nota.id === idNota) {
        toggleDeleted = !nota.deleted;
        return { ...nota, deleted: toggleDeleted };
      }
      return nota;
    });
    //api request to change deleted
    patchNotaApi(username, idNota, {
      deleted: toggleDeleted,
    });

    //update state
    setNotes(updateNotes);
    console.log(updateNotes);
  };

  const handleClickDeleteNote = (idNota) => {
    const updateNotes = notes.filter((nota) => nota.id !== idNota);
    //api request to delete Note
    deleteNotaApi(username, idNota);
    //update state
    setNotes(updateNotes);
  };

  const handleClickPinn = (idNota) => {
    let togglePinned;
    const updateNotes = notes.map((nota) => {
      if (nota.id === idNota) {
        togglePinned = !nota.pinned;
        return { ...nota, pinned: togglePinned };
      }
      return nota;
    });
    //api request to change deleted
    patchNotaApi(username, idNota, {
      pinned: togglePinned,
    });

    //update state
    setNotes(updateNotes);
    console.log(updateNotes);
  };

  const renderVariantNoteVersion01 = (note) => {
    if (variant === 'notesView' && note.deleted === false)
      return (
        <Note
          key={note.id}
          color={note.color}
          tittle={note.title}
          body={note.body}
        >
          <FooterNote
            note={note}
            username={username}
            onChangePalette={handleChangePalette}
            onClickTrash={handleClickTrash}
            onClickEdit={
              onSubmitNote
            } /* onSubmitNote es la misma funcion para todos footer de todas las notas */
            onClickPinn={handleClickPinn}
            idNote={note.id}
          />
        </Note>
      );
    if (variant === 'trashView' && note.deleted === true)
      return (
        <Note
          key={note.id}
          color={note.color}
          tittle={note.title}
          body={note.body}
        >
          <FooterNote
            note={note}
            username={username}
            onClickTrash={handleClickDeleteNote}
            onClickRecover={handleClickTrash}
            idNote={note.id}
          />
        </Note>
      );
  };

  const renderNotesView = () => {
    console.log('render notes view');
    const pinnedList = notes.filter(
      (note) => note.pinned && note.deleted === false
    );
    const othersList = notes.filter(
      (note) => !note.pinned && note.deleted === false
    );
    console.log('pinnedList:', pinnedList);
    console.log('pinnedList:', othersList);
    const renderNote = (note) => {
      return (
        <Note
          key={note.id}
          color={note.color}
          tittle={note.title}
          body={note.body}
        >
          <FooterNote
            note={note}
            username={username}
            onChangePalette={handleChangePalette}
            onClickTrash={handleClickTrash}
            onClickEdit={
              onSubmitNote
            } /* onSubmitNote es la misma funcion para todos footer de todas las notas */
            onClickPinn={handleClickPinn}
            idNote={note.id}
          />
        </Note>
      );
    };
    return (
      <>
        {pinnedList.length > 0 && (
          <h2 className={styles.titleSection}>PINNED</h2>
        )}
        <ul className={styles.list}>
          {/* PINNED LIST */}
          {pinnedList.length > 0 &&
            pinnedList.map((pinnedNote) => renderNote(pinnedNote))}
        </ul>
        {othersList.length > 0 && pinnedList.length > 0 && (
          <h2 className={styles.titleSection}>OTHERS</h2>
        )}
        <ul className={styles.list}>
          {/* OTHERS LIST */}
          {othersList.length > 0 &&
            othersList.map((othersNote) => renderNote(othersNote))}
        </ul>
      </>
    );
  };
  const renderTrashView = () => {
    console.log('render trash view');
    const notesDeleted = notes.filter((note) => note.deleted === true);
    const renderNote = (note) => {
      return (
        <Note
          key={note.id}
          color={note.color}
          tittle={note.title}
          body={note.body}
        >
          <FooterNote
            note={note}
            username={username}
            onChangePalette={handleChangePalette}
            onClickTrash={handleClickDeleteNote}
            onClickRecover={handleClickTrash}
            onClickEdit={onSubmitNote}
            idNote={note.id}
          />
        </Note>
      );
    };
    return (
      <ul className={styles.list}>
        {notesDeleted.map((note) => renderNote(note))}
      </ul>
    );
  };

  return (
    <>
      {variant === 'notesView' && renderNotesView()}
      {variant === 'trashView' && renderTrashView()}
    </>
  );

  /* return (
    /* Esta es la version de Keepable01 - v01 */

  /* <ul className={styles.list}>
      {notes.map((note) => renderVariantNoteVersion01(note))}
    </ul> */

  //); */
};

export default NoteList;

NoteList.propTypes = {
  notesRaw: PropTypes.array,
  username: PropTypes.string,
  variant: PropTypes.string,
  onSubmitNote: PropTypes.func,
};
