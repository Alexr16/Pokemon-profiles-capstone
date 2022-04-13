import display from './dom.js';
import { idArray } from './api.js';

const monsters = idArray();
const createCards = () => {
  monsters.forEach((pokemon) => display(pokemon));
};

export default createCards;