import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { FilterContactForm } from 'components/FilterContactForm';

import style from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevstate) {
    if (prevstate.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      this.state.contacts.some(
        ({ name }) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.includes(normalizedFilter);
    });
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          fontSize: 40,
          color: '#010101',
        }}
        className={style.container}
      >
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className={style.title}>Contacts</h2>
        <FilterContactForm value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
