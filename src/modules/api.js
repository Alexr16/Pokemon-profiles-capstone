const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appId = 'AWM7JxII6f3dlrfRP916';
const urlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AWM7JxII6f3dlrfRP916/likes/';

const getPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return data;
};

const createApp = async () => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
  });
  return response.json();
};

const createLikes = async (data) => {
  const response = await fetch(urlLikes, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: data.item_id }),
  });
  const res = await response.json();
  return res;
};

const getLikes = async () => {
  const response = await fetch(urlLikes);
  const likes = await response.json();
  return likes;
};

export { getPokemon, createLikes, getLikes };
