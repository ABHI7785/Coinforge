import { MDBBtn,  MDBCol, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import {useNavigate,} from 'react-router-dom'
import'./Style/Signin.css'
import axios from 'axios'
import swal from 'sweetalert'

const Signin = () => {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
const navigate=useNavigate()
  const handleName = (event) => {
    setName(event.target.value);
  };
  


  const handleEmail = (event) => {
    setEmail(event.target.value);
  };


  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const display=await axios.post('http://localhost:5000/signupp',{Name,Email,Password})
    console.log(display.data);


    if (display.data.Token) {
      swal({
        title: "Login Successful..!",
        icon: "success",
      });
      navigate("/login");
    } else {
      swal({
        title: "Login failed...",
        text: "Please check your credentials and try again",
        icon: "error",
      });
    }

  };



  return (
    <div>
      <div className='sigup'>

<h2>SIGN UP</h2>
<h4>Please enter your Credentials</h4>
  <form onSubmit={handleSubmit} className='signup'>
<MDBRow className='mb-4'>
  <MDBCol>
    <MDBInput id='form3Example1' label='Name' placeholder='Name' value={Name} onChange={handleName}/>
  </MDBCol>
</MDBRow>
<MDBInput className='mb-4' type='email' id='form3Example3' label='E-mail' placeholder='E-mail' value={Email} onChange={handleEmail} />
<MDBInput className='mb-4' type='password' id='form3Example4' label='Password' placeholder='Password'value={Password} onChange={handlePassword} />




<div className='text-center'>

 <button onClick={handleSubmit} className='cta8'>SIGN UP</button> 
 
  
 <p >or sign up with:</p> 

  <MDBBtn floating color="secondary" className='mx-1'>
    <MDBIcon  fab icon='facebook-f' />
  </MDBBtn>

  <MDBBtn floating color="secondary" className='mx-1'>
    <MDBIcon fab icon='google' />
  </MDBBtn>

  <MDBBtn floating color="secondary" className='mx-1'>
    <MDBIcon fab icon='twitter' />
  </MDBBtn>

  <MDBBtn floating color="secondary" className='mx-1'>
    <MDBIcon fab icon='github' />
  </MDBBtn>
</div>
</form>

</div>


    </div>
    
  )
}

export default Signin