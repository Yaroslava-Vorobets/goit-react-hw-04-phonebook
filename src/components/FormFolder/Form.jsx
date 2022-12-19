import PropTypes from 'prop-types';

import { useState } from "react"
import {Form, Label, Input,  Button, } from './Form.Styled';

export default function ContactForm ({onSubmit}) {
    const [name, setName] = useState('');
      const[number, setNumber]=useState('') 


  const  handleChange = e => {
        const {name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;            
            default:
                return;
       }      
    } 
 
  const  handleSubmit = e => {            
        e.preventDefault();        
       onSubmit(name, number)
        setName('');
        setNumber('');
    } 
     
       
        return (
            <>
                <Form onSubmit = {handleSubmit}>
                    <Label  htmlFor="fname">Name </Label>
                    < Input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />               
                    <Label  htmlFor="fname">Number</Label > 
                        < Input
                        onChange={handleChange}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />                    
                        < Button type = "submit">add contact</ Button>                
                </Form>            
            </>
        )
    }
 
    
 Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}



