import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-bottom: 20px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const HighlightedText = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 70px;
  font-family: rubik;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    // Add your form submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  };

  return (
    <>
    <HighlightedText>Kontakt oss</HighlightedText>
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label for="name">Ditt Navn</Label>
        <Input id="name" type="text" placeholder="Ditt Navn" value={name} onChange={e => setName(e.target.value)} required />
        <Label for="email">Din Email</Label>
        <Input id="email" type="email" placeholder="Din Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Label for="message">Din Melding</Label>
        <TextArea id="message" placeholder="Din Melding" rows="4" value={message} onChange={e => setMessage(e.target.value)} required />
        <Button type="submit">Send Melding</Button>
      </Form>
    </FormContainer>
    </>
  );
};

export default ContactForm;
