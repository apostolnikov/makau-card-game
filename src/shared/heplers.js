import cards from '../assets/cards';
const card_type = ['clubs', 'diamonds', 'spades', 'hearths'];
const card_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

export const createCards = () => {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      cards.push(getCard(i, j));
    }
  }

  return cards;
};

export const shuffleCards = cards => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

const getCard = (typeIndex, cardIndex) => ({
  type: card_type[typeIndex],
  number: card_numbers[cardIndex],
  image: cards[card_type[typeIndex]][`_${card_numbers[cardIndex]}`],
});