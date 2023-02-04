import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { initialState } from './init.state';
import { contactsReducer, filterReducer } from './reducer';

// import { CONTACT, DELETE_CONTACT, FILTER } from './constants';

// const initialState = {
//   contacts: contactsData,
//   filters: '',
// };

// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case CONTACT:
//       return [...state, payload];
//     case DELETE_CONTACT:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };
// const filterReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, initialState, enhancer);
