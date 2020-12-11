import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ContactForm from '../ContactForm';

// Sample Test 
test("renders ContatactForm without errors",() =>{
   render(<ContactForm/>) ;
})

test("Labels exist for input fields", () =>{
    render(<ContactForm/>);

    const fName = screen.getByLabelText(/first name/i)
    const lName = screen.getByLabelText(/last name/i)
    const email = screen.getByLabelText(/email/i)
    const msg = screen.getByLabelText(/message/i)

    fireEvent.change(firstName, {target: {value: "Lakendria"}});
  fireEvent.change(lastName, {target: {value: "McCullough"}});
  fireEvent.change(email, {target: {value: "kendra939@gmail.com"}});
  fireEvent.change(message, {target: {value: "I love to code"}});

  expect(firstName).toHaveValue("Lakendria");
    expect(lastName).toHaveValue("McCullough");
    expect(email).toHaveValue("kendra939@gmail.com");
    expect(message).toHaveValue("I love to code");

    expect(firstName).toBeTruthy();



})

