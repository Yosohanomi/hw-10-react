import { Component } from "react";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactsList } from "../../components/ContactList/ContactList";
import { Container } from "./Phonebook.styles";
export class PhoneBook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  };

  addContact = (name, number) => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts!`);
      return;
    }
    const newContact = {
      id: Date.now().toString(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };
  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

      render() {
        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm onAddContact={this.addContact}/>
                <h2>Contacts</h2>
                <ContactsList contacts={this.state.contacts} 
                onDeleteContact={this.deleteContact}/>
            </Container>
        )
      }
}