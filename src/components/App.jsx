import { Component } from "react";
import { nanoid } from 'nanoid'
import Box from "./Box";
import Phonebook from "./Phonebook";
import Contacts from "./Contacts";

export class App extends Component {
  // State
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  // Methods
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  };

  isIncludes = value =>
    this.state.contacts.find(contact => contact.name.toLowerCase() === value.toLowerCase());      

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

     if (this.isIncludes(name)) {
      alert(`${name} is olready in contacts`);
     } else {
      this.setState(prevState => ({            
        contacts: [...prevState.contacts, {name, id: nanoid(), number: number}],
        name: "",
        number: "",      
      }));
    }
  }

  // Render
  render() {

    const { number, name, contacts, filter} = this.state;

    const normalizeFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizeFilter));

    return (
      <Box 
        m={5}
        width="width"        
        as='main'
      >
        <Phonebook number={number} name={name} onChange={this.handleInputChange} onSubmit={this.handleSubmit} />
        <Contacts contacts={visibleContacts} filter={filter} onChange={this.handleInputChange} />
      </Box>
    );
  };
};
