/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/contactUs.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines a ContactUs component for a contact form where users can send messages.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: The component includes form fields for name, email, and message, and a submit button.
 *                 It uses useState for form state management and handles form submission.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: Added detailed comments to code for clarity.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: Update the handleSubmit function to integrate actual email sending functionality.
 ***************************************************************************************************************************/

import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

// Styled container for the contact form
const ContactContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

// Styled form element
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

// Styled input fields
const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Styled textarea for the message input
const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Styled submit button
const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #800080;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #670067;
  }
`;

const ContactUs = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Form submission logic
      console.log(formData);
    };
  
    return (
      <ContactContainer>
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            required
            rows={6}  // Changed from "6" to 6
            value={formData.message}
            onChange={handleInputChange}
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </Form>
      </ContactContainer>
    );
  };
  
  export default ContactUs;
