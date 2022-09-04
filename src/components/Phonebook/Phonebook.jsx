import Box from "components/Box";
import { Header, Label } from "./Phonebook.styled";

const Phonebook = ({ name, number, onChange, onSubmit }) => {
    return(
        <>
            <Header>Phonebook</Header>
            <Box 
                width="full" 
                border="normal"
                p={4}
                display="flex"
            >
                <form onSubmit={onSubmit}>
                    <Label htmlFor="name">
                        Name
                        <input 
                            type="text" 
                            name="name" 
                            value={name} 
                            onChange={onChange}
                            required
                        />                        
                    </Label>
                    <Label htmlFor="number">
                        Number
                        <input 
                            type="tel" 
                            name="number" 
                            value={number} 
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"                            
                            onChange={onChange} 
                            required
                        />
                    </Label>

                    <button type="submin">Add contact</button>
                </form>
            </Box>
        </>
    );
}

export default Phonebook;