import Button from '@components/ui/Button/Button';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './LoginPage.module.css'

const LoginPage = ({ submit }) => {
  const [username, setUsername] = useState('');

  //manejar el cambio al escribir en input
  const handleChange = (event) => {
    event.preventDefault();
    console.log('input: ', event.target.value);
    setUsername(event.target.value);
  };

  // mandar el username a localStorage
  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    }
  }, [username]);

  // manejar el click al boton submit
  const handleClick = (event) => {
    event.preventDefault();
    if (username && username !== '') submit(true);
    else {
      submit(false);
      console.log('Ingrese un username valido');
    }
  };

  return (
    <div className={styles.containerLogin}>
      <h1 className={styles.titleLogin}>Welcome to Codeable</h1>
      <form action="">
        <label htmlFor="username" className={styles.username}>Username</label>
        <input
        className={styles.inputForm}
          onChange={handleChange}
          type="text"
          name="username"
          id={Math.random()}
        />
        <button onClick={handleClick} className={styles.enterButton} >Enter</button>
      </form>
    </div>
  );
};

export default LoginPage;

LoginPage.propTypes = {
  submit: PropTypes.func,
};
