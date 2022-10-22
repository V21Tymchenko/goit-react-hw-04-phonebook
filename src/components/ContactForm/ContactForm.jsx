import { useState } from 'react';
import { LabelForm, InputForm, FormButton } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('something wrong');
        return;
    }
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmitAdd = event => {
    event.preventDefault();

    onSubmit(name, number);
    reset();
  };

  return (
    <form onSubmit={onSubmitAdd}>
      <div>
        <LabelForm htmlFor="name">
          Name
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id="name"
            value={name}
            onChange={handleInputChange}
          />
        </LabelForm>
        <LabelForm htmlFor="number">
          Number
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id="number"
            value={number}
            onChange={handleInputChange}
          />
        </LabelForm>
      </div>
      <div>
        <FormButton type="submit">Add contact</FormButton>
      </div>
    </form>
  );
}
