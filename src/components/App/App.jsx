import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Box, Phonebook, Contacts, ContactContainer } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

export function App() {
  const [contacts, setContacts] =
    useState(() => JSON.parse(window.localStorage.getItem('contacts'))) ?? [];
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const conditions = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (conditions) {
      toast.error(`${name} is already in contacts!`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevState => [newContact, ...prevState]);
  };

  const filterContact = event => {
    setFilter(event.currentTarget.value);
  };
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const newFilterContact = getVisibleContacts();
  return (
    <Box>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm onSubmit={addContact}></ContactForm>
      <Contacts>Contacts</Contacts>
      <ContactContainer>
        <Filter value={filter} onChange={filterContact}></Filter>
        <ContactList
          contacts={newFilterContact}
          onDeleteContact={deleteContact}
        ></ContactList>
      </ContactContainer>
      <Toaster />
    </Box>
  );
}
