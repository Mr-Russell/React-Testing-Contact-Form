import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm.js'
import { act } from 'react-dom/test-utils';

test('Form renders without errors', ()=>{
    render(<ContactForm />);
});

test('Form can be filled in and submitted', ()=>{
    const {getByPlaceholderText, getByTestId} = render(<ContactForm />);

    const firstName = getByPlaceholderText(/edd/i);
    expect(firstName).toBeInTheDocument();
    fireEvent.change(firstName, {target: {value: 'Yo' } })

    const lastName = getByPlaceholderText(/burke/i);
    expect(lastName).toBeInTheDocument();
    fireEvent.change(lastName, {target: {value: 'Mama' } })

    const email = getByTestId(/email/i);
    expect(email).toBeInTheDocument();
    fireEvent.change(email, {target: {value: 'yomama@me.com' } })

    const message = getByTestId(/message/i);
    expect(message).toBeInTheDocument();

    const cat = getByTestId(/catcheckbox/i);
    expect(cat).toBeInTheDocument();
    fireEvent.click(cat)

    const dog = getByTestId(/dogcheckbox/i);
    expect(dog).toBeInTheDocument();
    fireEvent.click(dog)

    const none = getByTestId(/nocheckbox/i);
    expect(none).toBeInTheDocument();
    fireEvent.click(none)

    const button = getByTestId(/submitbtn/i)
    expect(button).toBeInTheDocument();
    fireEvent.click(button)

    setTimeout(()=>{
        const data = getByTestId(/displaydata/i)
        expect(data).toBeInTheDocument();
    }, 1)
})