import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import contactsData from '../components/contactsData/contacts.json';
import { CONTACT, DELETE_CONTACT } from './constants';

const initialState = {
  contacts: contactsData,
  // filter: '',
};

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONTACT:
      return [...state, payload];
    case DELETE_CONTACT:
      return [
        ...state,
        state.contacts.filter(contact => contact.id !== payload),
      ];

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, initialState, enhancer);

// store.dispatch({ type: FILTER });
// console.log('🚀  store', store.getState());
// store.dispatch({ type: CONTACT });
// console.log('🚀  store', store.getState());
