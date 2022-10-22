import React from 'react';
import PropTypes from 'prop-types';

import {
  ContactListUl,
  ContactItem,
  ContactName,
  ContactNumer,
  FindContactButton,
  ListItemContainer,
} from './ContactList.styled.jsx';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ContactListUl>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <ListItemContainer>
                <ContactName>{name}:</ContactName>
                <ContactNumer>{number}</ContactNumer>
              </ListItemContainer>
              <ListItemContainer>
                <FindContactButton onClick={() => onDeleteContact(id)}>
                  Delete
                </FindContactButton>
              </ListItemContainer>
            </ContactItem>
          );
        })}
      </ContactListUl>
    </div>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
