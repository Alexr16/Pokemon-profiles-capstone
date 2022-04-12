import { getPokemon, getLikes, createLikes } from './api.js';

const capitalized = (string) => {
  const capit = string.split('');
  capit[0] = capit[0].toUpperCase();
  return capit.join('');
};

// const returnLikes = async (id) => {
//   let likesCounter;
//   const data = await getLikes();
//   data.forEach((monster) => {
//     if (monster.item_id === id) {
//       likesCounter = monster.likes;
//     }
//   });
//   return likesCounter;
// };

const sendLike = (pokemon) => {
  const data = {
    item_id: pokemon,
  };
  createLikes(data);
};

const display = async (monster) => {
  const pokemon = await getPokemon(monster);
  const cardContainer = document.getElementById('cards');
  const card = document.createElement('div');
  card.classList.add('card-container');
  cardContainer.appendChild(card);

  const imageontainer = document.createElement('div');
  imageontainer.classList.add('image-container');
  card.appendChild(imageontainer);

  const image = document.createElement('img');
  image.classList.add('poke-img');
  image.src = pokemon.sprites.other.dream_world.front_default;
  image.alt = pokemon.name;
  imageontainer.appendChild(image);

  const cardTitle = document.createElement('div');
  cardTitle.classList.add('card-title');
  card.appendChild(cardTitle);

  const title = document.createElement('h2');
  title.classList.add('title');
  title.innerText = capitalized(pokemon.name);
  cardTitle.appendChild(title);

  const like = document.createElement('button');
  like.classList.add('like');
  cardTitle.appendChild(like);

  like.addEventListener('click', () => {
    sendLike(pokemon.name);
  });

  const likesText = document.createElement('div');
  likesText.classList.add('count');
  card.appendChild(likesText);

  const likesCount = document.createElement('p');
  likesCount.classList.add('likes-count');
  let likesCounter;
  const data = await getLikes();
  data.forEach((monster) => {
    if (monster.item_id === pokemon.name) {
      likesCounter = monster.likes;
    }
  });
  likesCount.innerText = `${likesCounter} likes`;
  likesText.appendChild(likesCount);

  const buttons = document.createElement('div');
  buttons.classList.add('btns');
  card.appendChild(buttons);

  const comments = document.createElement('button');
  comments.classList.add('comment');
  comments.id = 'comment-btn';
  comments.innerText = 'Comment';
  buttons.appendChild(comments);

  const reservations = document.createElement('button');
  reservations.classList.add('reservation');
  reservations.id = 'reservation-btn';
  reservations.innerText = 'Reservations';
  buttons.appendChild(reservations);
};

export { display };