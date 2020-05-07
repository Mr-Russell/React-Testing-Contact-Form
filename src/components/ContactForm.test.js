import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import ContactForm from './ContactForm.js'

test('Form renders without errors', ()=>{
    render(<ContactForm />);
});