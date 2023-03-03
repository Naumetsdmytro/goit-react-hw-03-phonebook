import PropTypes from 'prop-types';

import style from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, onDeleteContact, id }) => {
  return (
    <li className={style.contactListItem}>
      <p className={style.contactListText}>
        {name}: {number}
      </p>
      <ButtonDelete onDeleteContact={onDeleteContact} id={id} />
    </li>
  );
};

const ButtonDelete = ({ onDeleteContact, id }) => {
  return (
    <button
      type="button"
      onClick={() => onDeleteContact(id)}
      className={style.buttonDelete}
    >
      Delete
    </button>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
