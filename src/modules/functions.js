import { display } from './dom.js';

const createCards = () => {
  const monsters = ['charizard', 'pikachu', 'arceus', 'magmar', 'dragonite', 'mewtwo', 'arcanine', 'lugia', 'altaria'];
  monsters.forEach((pokemon) => display(pokemon));
};

export { createCards };