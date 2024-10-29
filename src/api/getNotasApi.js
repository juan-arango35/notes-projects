import { API_BASE_URL } from './config.js';

const getNotesApi = (username) => {
  const options = {
    method: 'GET',
    headers: { 'User-Agent': 'insomnia/8.3.0' },
  };
  const url = `${API_BASE_URL}/${username}/notes`;
  console.log('RECIBO ESTA URL', url);
  const data = fetch(url, options)
    .then((response) => response.json())
    .then((datos) => {
      console.log(datos);
      return datos;
    })
    .catch((err) => console.error(err));

  return data;
};
export { getNotesApi };

//tests
//const data = getNotesApi('frandux');
