import axios from 'axios'
import {setFlash} from './flash'
import {setHeaders} from './headers'
export const MY_CARDS = 'MY_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'
export const TRADE_CARD = 'EDIT_CARD'

export const getCards = () => {
  return dispatch => {
    axios.get('/api/my_cards')
      .then( res => {
        dispatch({type: MY_CARDS, cards: res.data})
        dispatch(setHeaders(res.headers))
      })
      .catch(error => {
        dispatch(setHeaders(error.headers))
        dispatch(setFlash('Error getting cards', 'red'));
      })
  }
}

export const addCard = (card) => {
  return dispatch => {
    axios.post('/api/cards', card)
      .then( res => {
        dispatch({type: ADD_CARD, card: res.data})
        dispatch(setHeaders(res.headers))
        dispatch(setFlash('This card has been added to your deck', 'green'));
      })
      .catch( error => {
        dispatch(setHeaders(error.headers))
        dispatch(setFlash('Error adding card to your deck', 'red'));
      })
  }
}
export const deleteCard = (id) => {
  return dispatch => {
    axios.delete(`/api/cards/${id}`, id)
      .then( res => {
        dispatch({type: REMOVE_CARD, id})
        dispatch(setHeaders(res.headers))
        dispatch(setFlash('This card has been removed from your deck', 'green'));
      })
      .catch( error => {
        dispatch(setHeaders(error.headers))
        dispatch(setFlash('Error adding card to your deck', 'red'));
      })
  }
}
