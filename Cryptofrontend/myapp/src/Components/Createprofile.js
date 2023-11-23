import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Style/ConForm.css'
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
function Createprofile() { 
  const [name, setname] = useState("");
  const [place, setplace] = useState("");
  const [occupation, setoccupation] = useState("");
  const [age, setage] = useState("");
  const navigate = useNavigate();

  const nameChange = (e) => {
    setname(e.target.value);
  };

  const placeChange = (e) => {
    setplace(e.target.value);
  };

  const occupationChange = (e) => {
    setoccupation(e.target.value);
  };
  const ageChange = (e) => {
    setage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayy = await axios.post("http://localhost:5000/createprofile", { name,place,occupation,age });

    console.log(displayy.data)

    swal({
        title: "Profile created",
        icon: "success",
      });

      navigate("/")
  };


  
  






  return (
    <div className='contactform'>
        <h4>CREATE A TRADING PROFILE</h4>
        <Form className='conform' onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={nameChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Place</Form.Label>
        <Form.Control
          type="text"
          name="place"
          value={place}
          onChange={placeChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Occupation</Form.Label>
        <Form.Control
         type='text'
          name="occupation"
          value={occupation}
          onChange={occupationChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Age</Form.Label>
        <Form.Control
         type='number'
          name="age"
          value={age}
          onChange={ageChange}
          required
        />
      </Form.Group>

      <Button type="submit" className='ctaconf' variant="primary" >
        CREATE PROFILE
      </Button>
    </Form>

    </div>
    
  );
}

export default Createprofile;
