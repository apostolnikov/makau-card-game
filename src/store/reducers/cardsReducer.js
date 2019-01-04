import cards from '../../assets/cards';
const card_type = ['clubs', 'diamonds', 'spades', 'hearths'];
const card_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

const START_GAME = 'cards/START_GAME';

const initialState = {
  isGameStarted: false,
  deck: [],
  playerHand: [],
  isMyTurn: true,
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
  case START_GAME:
    return {
      ...state,
      isGameStarted: payload.isGameStarted,
      deck: payload.cards,
    };

  default:
    return state;
  }
}


export const dealCards = () => ({
  type: START_GAME,
  payload: {
    gameStarting: true,
    cards: shuffleCards(createCards()),
  }
});

// to move in helpers
const createCards = () => {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      cards.push(getCard(i, j));
    }
  }

  return cards;
};

const shuffleCards = cards => {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

const getCard = (typeIndex, cardIndex) => ({
  type: card_type[typeIndex],
  number: card_numbers[cardIndex],
  image: cards[card_type[typeIndex]]['_' + card_numbers[cardIndex]],
});