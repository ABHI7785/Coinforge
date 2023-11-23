import React, { useState } from "react";
import "./Style/Login.css";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const Admin = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [formData, setFormData] = useState([]);

const navigate=useNavigate()


  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:5000/adminloginn", {Email, Password});
    console.log(display.data);

    
    localStorage.setItem("userinfo", JSON.stringify(display.data));
    if (display.data.Token) {
      swal({
        title: "Login Successful..!",
        icon: "success",
      });
      navigate("/sidebar1")
    

    } else {
      swal({
        title: "Login failed...",
        text: "Please check your credentials and try again",
        icon: "error",
      });
    }
  };

  
  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <div className="logg">
      <h2>ADMIN</h2>
      <h4>Please enter your Credentials</h4>
      <form onSubmit={handleSubmit} className="loginclass">
        <MDBInput
          className="mb-4"
          type="email"
          id="form1Example1"
          label="E-mail Address"
          placeholder="E-mail Address"
          value={Email}
          onChange={handleEmail}
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="form1Example2"
          label="Password"
          placeholder="Password"
          value={Password}
          onChange={handlePassword}
        />

        <MDBRow className="mb-4">
          <MDBCol className="d-flex justify-content-center">
            <MDBCheckbox
              id="form1Example3"
              label="Remember me"
              defaultChecked
            />
          </MDBCol>
          <MDBCol>
            <a href="#!">Forgot password?</a>
          </MDBCol>
        </MDBRow>

        <MDBBtn id="ctalo" type="submit" block>
        LOG IN
        </MDBBtn>
        <div className="text-center"></div>
      </form>


      {/* <div className='text-center'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Admin;
