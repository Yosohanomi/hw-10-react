import { Component } from "react";
import { List } from "./ContactList.styles";
import { Item } from "./ContactList.styles";

export class ContactsList extends Component {
  state = {
    filter: "",
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { contacts } = this.props;
    const { filter } = this.state;

    if (!filter.trim()) {
      return contacts;
    }

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    
    return (
      <>
        <input
          type="text"
          placeholder="Filter by text"
          value={this.state.filter}
          onChange={this.handleFilterChange}
        />
        
        <List>
          {filteredContacts.map((contact) => (
            <Item key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button 
                type="button" 
                onClick={() => this.props.onDeleteContact(contact.id)}
              >
                Delete contact
              </button>
            </Item>
          ))}
        </List>
      </>
    );
  }
}