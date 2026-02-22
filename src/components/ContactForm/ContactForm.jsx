import { Component } from "react";
import { Form } from "./ContactForm.styles";

export class ContactForm extends Component {
  addContact = () => {
    const nameInput = this.name.value.trim();
    const numberInput = this.number.value.trim();
    
    if (!nameInput || !numberInput) return;

    this.props.onAddContact(nameInput, numberInput);
    
    this.name.value = "";
    this.number.value = "";
  };

  render() {
    return (
      <Form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          ref={el => this.name = el}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        
        <label htmlFor="tel">Number</label>
        <input
          id="tel"
          type="tel"
          name="number"
          ref={el => this.number = el}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        
        <button type="button" onClick={this.addContact}>
          Add contact
        </button>
      </Form>
    );
  }
}