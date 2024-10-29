import styles from './MainPage.module.css';
import Header from "../../common/Header/Header"
import Menu from"../../common/Menu/Menu"
import NotesView from "../../common/NotesView/NotesView";
import { useState, useEffect } from 'react';
import TrashView from '../../common/TrashView/TrashView';

//agrege la prop que se manada al boton del header
const MainPage = ({redirectToLogin}) => {
  const [currentTab, setCurrentTab] = useState('notesTap');
  const [username, setUsername] = useState('');

  const handleTabChange = (tab) => {
    if (tab !== 'notesTap' && tab !== 'trashTap')
      console.log(`Error: [${tab}] una tab incorrecta!`);
    else setCurrentTab(tab);
  };

  useEffect(() => {
    let user = localStorage.getItem('username');
    if (user) {
      setUsername(user);
    }
  }, [username]);

  return (
    <main className={styles.main}>
     {/*  aqui tambien agreg la prop. */}
      <Header redirectToLogin={redirectToLogin} />
      <div className={styles.sidebar}>
        <aside className={styles.aside}>
          <Menu onTabChange={handleTabChange} currentTab={currentTab} />
        </aside>
        <div className={styles.content}>
          {currentTab === 'notesTap' && <NotesView username={username} />}
          {currentTab === 'trashTap' && <TrashView username={username} />}
        </div>
      </div>
    </main>
  );
};

export default MainPage;
