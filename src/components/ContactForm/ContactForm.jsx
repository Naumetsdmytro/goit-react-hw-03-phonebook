import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    const { name } = this.state;
    evt.preventDefault();
    if (
      !this.props.contacts.some(
        ({ name }) => name.toLowerCase() === this.state.name.toLowerCase()
      )
    ) {
      this.formReset();
      this.props.onSubmit(this.state);
      return;
    }
    alert(`${name} is already in contacts.`);
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={style.contactForm}>
        <label className={style.inputTitle}>
          <span className={style.inputText}>Name</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
            className={style.formInput}
          />
        </label>
        <label className={style.inputTitle}>
          <span className={style.inputText}>Number</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
            className={style.formInput}
          />
        </label>
        <button type="submit" className={style.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
