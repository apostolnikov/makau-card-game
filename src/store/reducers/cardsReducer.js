import { shuffleCards, createCards } from '../../shared/heplers';

const START_GAME = 'cards/START_GAME';
const DEAL_CARDS = 'cards/DEAL_CARDS';
const ADD_CARD_TO_DECK = 'cards/ADD_CARD_TO_DECK';

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

  case DEAL_CARDS:
    return {
      ...state,
      playerHand: state.deck.slice(0, 6),
      deck: state.deck.slice(6, state.deck.length)
    };

  case ADD_CARD_TO_DECK:
    return {
      ...state,
      deck: [...state.deck, payload],
      playerHand: state.playerHand.filter(h => !(h.type === payload.type && h.number === payload.number))
    };

  default:
    return state;
  }
}


export const startGame = () => ({
  type: START_GAME,
  payload: {
    gameStarting: true,
    cards: shuffleCards(createCards()),
  }
});

export const dealCards = () => ({
  type: DEAL_CARDS
});

export const addCardToDeck = (card) => ({
  type: ADD_CARD_TO_DECK,
  payload: card
});