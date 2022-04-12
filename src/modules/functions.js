import { display } from './dom.js';
import { createLikes } from './api.js';

const createCards = () => {
  const monsters = ['charizard', 'pikachu', 'arceus', 'magmar', 'dragonite', 'mewtwo', 'arcanine', 'lugia', 'altaria'];
  monsters.forEach((pokemon) => {
    display(pokemon);
  });
};

export { createCards };