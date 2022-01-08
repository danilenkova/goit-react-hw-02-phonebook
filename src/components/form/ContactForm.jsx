import React, { Component } from "react";
import {
  StyledForm,
  FormLabel,
  FormField,
  FormInput,
  FormButton,
} from "./ContactForm.styled";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = { name: "", number: "" };
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handelSubmit}>
        <FormLabel>
          <FormField>Name</FormField>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            autoComplete="off"
            onChange={this.handleInputChange}
            value={this.state.name}
            required
          />
        </FormLabel>
        <FormLabel>
          <FormField>Number</FormField>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter phone number"
            autoComplete="off"
            onChange={this.handleInputChange}
            value={this.state.number}
            required
          />
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </StyledForm>
    );
  }
}

export default ContactForm;
