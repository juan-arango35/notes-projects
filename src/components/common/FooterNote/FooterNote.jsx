import styled from "./FooterNote.module.css";
import ColorPicker from "../ColorPicker/ColorPicker";
import EditModal from "../EditModal/EditModal";
import PropTypes from "prop-types";
import { useState } from "react";
import NoteForm from "../NoteForm/NoteForm";

const FooterNote = ({
  note,
  username,
  onChangePalette,
  onClickTrash,
  onClickPinn,
  onClickRecover,
  onClickEdit,
  idNote,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleClickEdit = () => {
    openModal();
  };

  const handleSubmitEditNote = () => {
    closeModal();
    onClickEdit(true);
  };

  return (
    <div className={styled.footer}>
      {/* {onChangePalette && (
        <input
          type="color"
          name="color"
          id="color"
          onBlur={(e) => onChangePalette(e.target.value, idNote)}
          className={styled.color_button}
        />
      )} */}
      {/* COLOR PICKER DEL PROFE  */}
      {onChangePalette && (
        <ColorPicker
          onChangeColor={(COLOR) => {
            onChangePalette(COLOR, idNote);
          }}
        />
      )}
      {onClickTrash && (
        <input
          type="button"
          name="button"
          id="color"
          onClick={() => onClickTrash(idNote)}
          className={styled.trash_button}
        />
      )}
      {onClickPinn && (
        <input
          type="button"
          name="button"
          id="color"
          onClick={() => onClickPinn(idNote)}
          className={
            note.pinned ? styled.pinn_button_filled : styled.pinn_button
          }
        />
      )}
      {onClickRecover && (
        <input
          type="button"
          name="button"
          id="color"
          onClick={() => onClickRecover(idNote)}
          className={styled.recover_button}
        />
      )}
      {onClickEdit && (
        <>
          {/* Boton con SVG de Editar */}
          <input
            type="button"
            name="button"
            id="color"
            onClick={handleClickEdit}
            className={styled.edit_button}
          />
          {/* Modal: aparece al dar click en Boton SVG Editar */}
          <EditModal
            isOpen={isModalOpen}
            onClose={() => {} /* () => closeModal() */}
          >
            <NoteForm
              note={note}
              onSubmitNote={handleSubmitEditNote}
              username={username}
              variant="modal" /* Usar la llamada a la API con patch ( actualizar una nota ) */
            />
          </EditModal>
        </>
      )}
    </div>
  );
};

export default FooterNote;

FooterNote.propTypes = {
  onChangePalette: PropTypes.func,
  onClickTrash: PropTypes.func,
  onClickPinn: PropTypes.func,
  onClickRecover: PropTypes.func,
  onClickEdit: PropTypes.func,
  idNote: PropTypes.string,
  username: PropTypes.string,
  note: PropTypes.object,
};
