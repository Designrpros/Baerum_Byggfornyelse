import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

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

const ContactInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  
    emailjs.send('service_8itbdxm', 'template_bcgtjui', {
      name: name,
      email: email,
      message: message
    }, 'qBalOK5z0utTf94im')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
  };

  return (
    <>
    <HighlightedText>Kontakt oss</HighlightedText>
    <ContactInfoContainer>
      <ContactInfoItem>
        <FaPhone />
        <p>123 456 789</p>
      </ContactInfoItem>
      <ContactInfoItem>
        <FaEnvelope />
        <p>email@example.com</p>
      </ContactInfoItem>
      <ContactInfoItem>
        <FaClock />
        <p>Mon - Fri: 9:00 - 18:00</p>
      </ContactInfoItem>
    </ContactInfoContainer>
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Label for="name">Ditt Navn</Label>
        <Input id="name" type="text" placeholder="Ditt Navn" value={name} onChange={e => setName(e.target.value)} required />
        <Label for="email">Din Email</Label>
        <Input id="email" type="email" placeholder="Din Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <Label for="message">Din Melding</Label>
        <TextArea id="message" placeholder="Din Melding" rows="4" value={message} onChange={e => setMessage(e.target.value)} required />
        <Button type="submit" onClick={handleSubmit} onTouchStart={handleSubmit}>Send Melding</Button>
      </Form>
    </FormContainer>
    </>
  );
};

export default ContactForm;