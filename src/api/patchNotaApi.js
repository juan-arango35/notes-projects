import { API_BASE_URL } from './config.js';

const patchNotaApi = (username, id, body) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.3.0',
    },
    body: JSON.stringify(body),
  };
  const url = `${API_BASE_URL}/${username}/notes/${id}`;
  const data = fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      console.log('API PATCH:', response);
      return response;
    })
    .catch((err) => console.error(err));

  return data;
};
export { patchNotaApi };

//tests

//cambiar color
/* const username = 'frandux';
const id = '7534d895-96e7-4f84-b6f0-977ffb781732';
patchNotaApi(username, id, {
  color: '#f4f',
});  */

//enviar a Trash
/* const username = 'frandux';
const id = '7534d895-96e7-4f84-b6f0-977ffb781732';
patchNotaApi(username, id, {
  deleted: true,
}); */

//Enviar a Pineados
/* const username = 'frandux';
const id = '7534d895-96e7-4f84-b6f0-977ffb781732';
patchNotaApi(username, id, {
  pinned: true,
}); */
