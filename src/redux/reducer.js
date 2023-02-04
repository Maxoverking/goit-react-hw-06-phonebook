import { CONTACT, DELETE_CONTACT, FILTER } from './constants';
import { initialState } from './init.state';

export const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};
export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FILTER:
      return payload;
    default:
      return state;
  }
};
