import { cards } from './data.js';;
import { shuffle } from './shuffle.js';
import { generateGrid } from './grid.js';
import { attachClickHandler } from './attachClickHandler.js';

const shuffledCards = shuffle(cards);

generateGrid(shuffledCards);

attachClickHandler(shuffledCards);

console.log(shuffledCards);