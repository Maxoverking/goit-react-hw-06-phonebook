import { useState } from "react";
import { useDispatch,useSelector} from 'react-redux'

import { Container } from "./App.styled";
import  Form  from "./Form";
import  Contacts  from "./Contacts";
import Filter from "./Filter";
import useLocalStorage from './hooks/useLocalStorage';
import WrapperForPhonebook  from "./Wrapper";
import contactsData from './contactsData/contacts';
import { deleteContactsAction } from "redux/actions";
 

const LOCAL_STORAGE_KEY = 'contacts-list';

export const App = () => {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useLocalStorage(LOCAL_STORAGE_KEY, contactsData);
  const dataFromUser  = useSelector(state => state.contacts);

    console.log("🚀  dataFromUser", dataFromUser);
  const [filter, setFilter] = useState('');
  
  const getFormData = dataFromUser => {
   console.log("object", dataFromUser);
  if (contacts.length === 0) {
    setContacts([dataFromUser]);
    return;
    } else {
    const existingContacts = contacts.find(contact => contact.name);

    //Проверка если контакт уже есть
    if(dataFromUser.name === existingContacts.name ){
      alert(`${existingContacts.name} is already in contacts.`)
      return;
    }
    setContacts(prevState => [dataFromUser, ...prevState])
    }
  }
  const deleteContact = uniqueId => {
    // console.log("🚀  uniqueId", uniqueId);
    dispatch(deleteContactsAction(uniqueId));
    // setContacts(prevState => prevState.filter(
    //     contact => contact.id !== uniqueId)
    //   )  
    }
  const chooseFilterContact = (evt) => {
    setFilter(evt.target.value);
    // console.log("🚀  evt22", evt.target.value);
  }
  // const filterContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact=>
  //      contact.name.toLowerCase().includes(normalizedFilter))
  // }

  return (
    <Container>
        <WrapperForPhonebook>
          {/* Передаем в пропс метод который получит 
          данные из формы */}
        <Form submitData={getFormData} /> 
        {dataFromUser.length === 0 ? '' :
          <>
        <Filter value={filter} onChangeProps={chooseFilterContact} />
        
        <Contacts contacts={dataFromUser}
            deleteContact={deleteContact} />
          </> }
        
        
        </WrapperForPhonebook>
    </Container>
  )
};