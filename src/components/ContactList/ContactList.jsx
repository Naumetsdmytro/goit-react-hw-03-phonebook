import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactListItem';

import style from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactListItem
            name={name}
            number={number}
            key={id}
            onDeleteContact={onDeleteContact}
            id={id}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
