import {
  MY_CARDS,
  ADD_CARD,
  REMOVE_CARD,
  TRADE_CARD, 
} from '../actions/myCards'

const myCards = (state = [], action) => {
  switch(action.type){
    case MY_CARDS:
      return action.cards
    case ADD_CARD:
      return [action.card, ...state]
      case REMOVE_CARD:
      return state.filter(c => c.id !== action.id);
    case TRADE_CARD:
      return state.map(c => {
        if (c.id === action.card.id) return action.card;
        return c;
      });
    default:
      return state;
  }
}

export default myCards