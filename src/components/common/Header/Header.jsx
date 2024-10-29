import styles from './Header.module.css';
import Button from '../../ui/Button/Button';
import { useEffect, useState } from 'react';

const Header = ({redirectToLogin}) => {
 /*  agrego un estado que sera capturado de localStorage */
  const [username, setUsername] = useState('');

 /* agrego un useEffect que traeré el usuario de localstorage */
 useEffect(() => {
 const storedUsername=localStorage.getItem('username');
 setUsername(storedUsername)
 }, [])

  return (
    <div className={styles.headercontent}>
      <h2 className={styles.title}>
        Welcome to Codeable Keep{' '}
        <span className={styles.username}>{username}</span>{' '}
      </h2>
    {/*   agrego la funcion que me redireccionara al Login */}
      <Button variant={'ghost'} onClick={redirectToLogin}>
        Exit
      </Button>
   
    </div>
  );
};

export default Header;
