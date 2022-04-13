const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AWM7JxII6f3dlrfRP916/likes/';
const urlComments = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/AWM7JxII6f3dlrfRP916/comments';

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
  await fetch(urlLikes, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ item_id: data.item_id }),
  });
};

const getLikes = async () => {
  const response = await fetch(urlLikes);
  const likes = await response.json();
  return likes;
};

const createComment = async (data) => {
  await fetch(urlComments, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: data.item_id,
      username: data.username,
      comment: data.comment,
    }),
  });
};

const getComment = async (id) => {
  const response = await fetch(`${urlComments}?item_id=${id}`);
  const likes = Promise.resolve(await response.json());
  return likes;
};

const sendComment = async (pokemon, name, comments) => {
  const data = {
    item_id: pokemon,
    username: name,
    comment: comments,
  };
  Promise.resolve(await createComment(data));
};

export {
  getPokemon, createLikes, getLikes, getComment, createApp, sendComment,
};
