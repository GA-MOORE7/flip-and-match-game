const pairs = [
    { id: 1, picture: '🍎', word: 'Apple' },
    { id: 2, picture: '🍌', word: 'Banana' },
    { id: 3, picture: '🍇', word: 'Grapes' },
    { id: 4, picture: '🍓', word: 'Strawberry' },
    { id: 5, picture: '🍍', word: 'Pineapple' },
    { id: 6, picture: '🥝', word: 'Kiwi' },
    { id: 7, picture: '🍉', word: 'Watermelon' },
    { id: 8, picture: '🍒', word: 'Cherry' },
    { id: 9, picture: '🍑', word: 'Peach' }
];

const cards = [];


for (const pair of pairs) {
    cards.push(
        { pairId: pair.id, type: "picture", value: pair.picture },
        { pairId: pair.id, type: "word", value: pair.word }
    );
}

export { cards };