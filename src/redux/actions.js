import { CONTACT, DELETE_CONTACT } from './constants';

export const addNewContactsAction = payload => ({
  type: CONTACT,
  payload,
});
export const deleteContactsAction = payload => ({
  type: DELETE_CONTACT,
  payload,
});
