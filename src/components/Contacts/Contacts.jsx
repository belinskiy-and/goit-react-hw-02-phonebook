import Box from "components/Box";
import Filter from "components/Filter";
import ContactsList from "components/ContsctsList"
import { Header } from "./Contacts.styled";


const Contacts = ({ contacts, filter, onChange }) => {

    // const handleFilter = e => {
    //     e.target.value
    // }

    return(            
        <Box 
            width="full" 
            border="none"
            py={4}                
        >
            <Header>Contacts</Header>
            <Filter filter={filter} onChange={onChange}  />
            <ContactsList contacts={contacts} />
        </Box>        
    );
}

export default Contacts;