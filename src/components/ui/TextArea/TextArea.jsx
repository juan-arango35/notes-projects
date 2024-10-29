import PropTypes from 'prop-types';

const TextArea = ({ value }) => {
  return <textarea default={value}></textarea>;
};
//default = {value} Elememento No Controlado, puedo modificar textArea
//value = {value} Elemento Controlado - tengo que usar onChange con un useState
//                para modificar el valor de textArea
export default TextArea;

TextArea.propTypes = {
  value: PropTypes.string,
};
