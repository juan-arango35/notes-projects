import { useState } from 'react';
import LoginPage from './components/pages/LoginPage/LoginPage';
import MainPage from './components/pages/MainPage/MainPage';
import './styles/App.css';

const LOGIN = 'login';
const SESSION = 'session';

const App = () => {
  const [currentPage, setCurrentPage] = useState(LOGIN);

  //manejar la respuesta de LoginPage
  //      true -> username invalido
  //      false -> username inicia session
  const handleSubmit = (response) => {
    console.log('Inicio session?:', response);
    setCurrentPage(response ? SESSION : LOGIN);
    console.log('currentPage:', currentPage);
  };
  function redirectToLogin(){
    setCurrentPage(LOGIN)
  }

  
  return (
    <>
      {currentPage === LOGIN && <LoginPage submit={handleSubmit} />}
      {currentPage === SESSION && <MainPage redirectToLogin={redirectToLogin} />}
    </>
  );
};

export default App;
