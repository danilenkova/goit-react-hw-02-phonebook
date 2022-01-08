import React from "react";
import PropTypes from "prop-types";
import {
  Contacts,
  ContactsItem,
  ContactInfo,
  ContactName,
  DeleteButton,
} from "./ContactList.styled";

const ContactList = ({ contacts, onSubmit }) => {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <ContactInfo>
            <ContactName>{name}</ContactName>
            {number}
          </ContactInfo>
          <DeleteButton type="submit" onClick={() => onSubmit(id)}>
            Delete
          </DeleteButton>
        </ContactsItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
