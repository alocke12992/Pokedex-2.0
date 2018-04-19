import {
  TYPES,
  SUB_TYPES,
  SUPER_TYPES,
} from '../actions/types'

const types = (state = [], action) => {
  switch (action.type) {
    case TYPES:
      return action.types
    case SUB_TYPES:
      return action.subtypes
    case SUPER_TYPES:
      return action.supertypes
    default:
      return state
  }
}

export default types