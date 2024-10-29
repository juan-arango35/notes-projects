import { API_BASE_URL } from './config.js';

const deleteNotaApi = (username, id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'User-Agent': 'insomnia/8.3.0',
    },
  };
  const url = `${API_BASE_URL}/${username}/notes/${id}`;
  console.log(url);
  const data = fetch(url, options)
    //.then((response) => response.json()) //la api no retorna respuesta o body
    .then((response) => console.log(response))
    .catch((err) => console.error('error AQUI!', err));

  return data;
};
export { deleteNotaApi };

//tests

/* const username = 'frandux';
const id = 'a06ecb02-0636-4061-adf7-bc73a076dd1a';
deleteNotaApi(username, id); */
