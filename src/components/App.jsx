import { Component } from "react";
import { nanoid } from 'nanoid'
import Box from "./Box";
import Phonebook from "./Phonebook";
import Contacts from "./Contacts";

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

export class App extends Component {
  // State
  state = {
    contacts: initialContacts,
    filter: '',
  };

  // Methods
  isIncludes = value =>
    this.state.contacts.find(contact => contact.name.toLowerCase() === value.toLowerCase());      
  
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value});
  }

  formSubmitHandle = ({ name, number }) => {
    if (this.isIncludes(name)) {
      alert(`${name} is olready in contacts`);
     } else {
      const id = nanoid(); 
      this.setState(prevState => ({                   
        contacts: [...prevState.contacts, {id, name, number}],      
      }));
    }  
  };

  // Render
  render() {

    const { contacts, filter} = this.state;

    const normalizeFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizeFilter));

    return (
      <Box 
        m={5}
        width="width"        
        as='main'
      >
        <Phonebook onSubmit={this.formSubmitHandle} />
        <Contacts contacts={visibleContacts} filter={filter} onChange={this.handleInputChange} />
      </Box>
    );
  };
};
