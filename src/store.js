export const initialStore= () => {
  return{
    contacts: []  
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'fetchedContacts':
    {
      const contactArray = action.payload;
      return {
        ...store,
        contacts: [...contactArray]
      }
    }
    case 'createdContact':
    {
      const newContact = action.payload;

      return {
        ...store,
        contacts: [...store.contacts, newContact]
      }
    }
     case 'updatedContact':
    {  
      const updatedContact = action.payload;
      // remove original contact that was recently updated
      const filteredContacts = store.contacts.filter(contact => contact.id !== updatedContact.id)
      console.log('filteredConatctList', filteredContacts)
      return {
        ...store,
        contacts: [...filteredContacts, updatedContact],
      }
    }
    case 'deletedContact':
    {
      const { id } = action.payload;
      // const filteredContacts = store.contacts.filter(contact => contact.id !== id)
      // console.log(filteredContacts);
      return {
        ...store,
        contacts: store.contacts.filter(contact => contact.id !== id)
      }
    }
    default:
      throw Error('Unknown action.');
  }    
}