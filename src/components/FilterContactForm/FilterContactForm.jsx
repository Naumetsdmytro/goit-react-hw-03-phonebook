import PropTypes from 'prop-types';

import style from './FilterContactForm.module.css';

export const FilterContactForm = ({ value, onChange }) => {
  return (
    <label className={style.inputTitle}>
      <span className={style.inputText}>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={style.filterInput}
      />
    </label>
  );
};

FilterContactForm.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
