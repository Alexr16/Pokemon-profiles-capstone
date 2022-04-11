import { display } from './dom.js';

const createCards = () => {
  const monsters = ['charizard', 'pikachu', 'arceus', 'magmar', 'dragonite', 'mewtwo', 'arcanine'];
  monsters.forEach((pokemon) => display(pokemon));
};

export { createCards };