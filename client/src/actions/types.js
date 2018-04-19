import axios from 'axios'
import {setHeaders} from './headers'

export const TYPES = 'TYPES'
export const SUB_TYPES = 'SUB_TYPES'
export const SUPER_TYPES = 'SUPER_TYPES'

export const getTypes = () => {
  return dispatch => {
    axios.get('/api/types')
      .then(res => {
        dispatch({type: TYPES, types: res.data})
        dispatch(setHeaders(res.headers))
      })
      .catch(res => {
        dispatch(setHeaders(res.headers))
      })
  }
}
export const getSubtypes = () => {
  return dispatch => {
    axios.get('/api/subtypes')
      .then(res => {
        dispatch({type: SUB_TYPES, subtypes: res.data})
        dispatch(setHeaders(res.headers))
      })
      .catch(res => {
        dispatch(setHeaders(res.headers))
      })
  }
}
export const getSupertypes = () => {
  return dispatch => {
    axios.get('/api/supertypes')
      .then(res => {
        dispatch({type: SUPER_TYPES, supertypes: res.data})
        dispatch(setHeaders(res.headers))
      })
      .catch(res => {
        dispatch(setHeaders(res.headers))
      })
  }
}