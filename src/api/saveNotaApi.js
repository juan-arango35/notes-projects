import { API_BASE_URL } from './config.js';

const saveNotaApi = (username, body) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.3.0',
    },
    body: JSON.stringify(body),
  };
  const url = `${API_BASE_URL}/${username}/notes`;
  const data = fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => console.error(err));

  return data;
};
export { saveNotaApi };

//tests

/* saveNotaApi('frandux', {
  title: 'Testeando api 02',
  body: 'Cuerpo de mensaje 02',
  color: '#1b3b1b',
}); */
