import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Style/ConForm.css'
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
function ContactForm() { 
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const navigate = useNavigate();

  const nameChange = (e) => {
    setname(e.target.value);
  };

  const emailChange = (e) => {
    setemail(e.target.value);
  };

  const messageChange = (e) => {
    setmessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayy = await axios.post("http://localhost:5000/createquery", { name,email,message });
    // const display = await axios.get("http://localhost:5000/getquery", { name,email,message });
    // onFormSubmit(display.data); 
    
     console.log(displayy.data)
     swal({
      title: "mail shared",
      icon: "success",
    });

    navigate("/")
  };

  return (
    <div className='contactform'>
        <h4>GET IN TOUCH</h4>
        <Form className='conform' onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={nameChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Your Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={emailChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          value={message}
          onChange={messageChange}
          rows={4}
          required
        />
      </Form.Group>

      <Button className='ctaconf' variant="primary" type="submit">
        Mail Now
      </Button>
    </Form>

    </div>
    
  );
}

export default ContactForm;
