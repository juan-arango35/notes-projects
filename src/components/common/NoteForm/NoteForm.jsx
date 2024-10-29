import { useState } from 'react';
import styled from './NoteForm.module.css';
import PropTypes from 'prop-types';
import { saveNotaApi } from "../../../api/saveNotaApi";
import { patchNotaApi } from '../../../api/patchNotaApi';
import ColorPicker from '../ColorPicker/ColorPicker';
import pinnIcon from '../../../assets/Pinn.svg';
import pinnFilledIcon from '../../../assets/PinnFilled1.svg';

const NoteForm = ({ note, onSubmitNote, username, variant }) => {
  const [title, setTitle] = useState(note ? note.title : '');
  const [body, setBody] = useState(note ? note.body : '');
  const [color, setColor] = useState(note ? note.color : 'white');
  const [pinned, setPinned] = useState(note ? note.pinned : false);

  const handleClickPinn = () => {
    console.log('ANTES pinned en NoteForm:', pinned);
    setPinned(!pinned);
    console.log('DESPUES pinned en NoteForm:', pinned);
  };

  //funcion que mandara las notas
  function handleSaveSubmit(event) {
    event.preventDefault();

    saveNotaApi(username, {
      title: title,
      body: body,
      color: color,
      pinned: pinned,
    })
      .then(() => {
        setTitle('');
        setBody('');
        setColor('white');
        setPinned(false);
        onSubmitNote(true);
      })
      .catch(() => {
        onSubmitNote(false);
      });
  }
  const handleEditSubmit = (e) => {
    e.preventDefault();

    patchNotaApi(username, note.id, {
      title: title,
      body: body,
      color: color,
      pinned: pinned,
    })
      .then(() => {
        onSubmitNote(true);
      })
      .catch(() => {
        onSubmitNote(false);
      });
  };

  return (
    <form
      onSubmit={variant === 'modal' ? handleEditSubmit : handleSaveSubmit}
      className={styled.contentForm}
      style={{ backgroundColor: color }}
    >
      <div>
        <label htmlFor="titiloenviado"></label>
        <input
          type="text"
          placeholder="Title"
          id="tituloenviado"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styled.titleNotes}
        />
      </div>
      <div>
        <label htmlFor="cuerpoenviado"></label>
        <textarea
          id="cuerpoenviado"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          placeholder="Your note"
          className={styled.bodyNotes}
        />
      </div>
      <div className={styled.footerFormNotes}>
        {/*   agrege la paleta de colores */}
        {/* <input
          type="color"
          name="color"
          id="color"
          className={styled.color_button}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        /> */}

        <ColorPicker onChangeColor={(COLOR) => setColor(COLOR)} />

        <img
          onClick={handleClickPinn}
          src={pinned ? pinnFilledIcon : pinnIcon}
          className={styled.pinn}
        />

        <button type="submit" className={styled.agregarNota}>
          Keep it!
        </button>
      </div>
      {/*   <ul> comentado para que no se agrege en la paret de abajo del componente
        {notas.map((nota) => (
          <li key={nota.id}>{nota.body}</li>
        ))}
      </ul> */}
    </form>
  );
};

export default NoteForm;

NoteForm.propTypes = {
  onSubmitNote: PropTypes.func,
  username: PropTypes.string,
  note: PropTypes.object,
  variant: PropTypes.string,
};
