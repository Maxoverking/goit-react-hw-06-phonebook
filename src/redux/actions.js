import { CONTACT, DELETE_CONTACT, FILTER } from './constants';

export const addNewContactsAction = payload => ({
  type: CONTACT,
  payload,
});
export const deleteContactsAction = payload => ({
  type: DELETE_CONTACT,
  payload,
});
export const filterContactsAction = payload => ({
  type: FILTER,
  payload,
});
