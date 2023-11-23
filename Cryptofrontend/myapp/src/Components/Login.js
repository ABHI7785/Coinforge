import React, { useState } from "react";
import "./Style/Login.css";

import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const display = await axios.post("http://localhost:5000/loginn", {
      Email,
      Password,
    });
    console.log(display.data);

    localStorage.setItem("userinfo", JSON.stringify(display.data));
    if (display.data.Token) {
      swal({
        title: "Login Successful..!",
        icon: "success",
      });
      navigate("/displaycoins");
    } else {
      swal({
        title: "Login failed...",
        text: "Please check your credentials and try again",
        icon: "error",
      });
    }
  };

  return (
    <div className="logg">
      <h2>LOG IN</h2>
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
        <div className="text-center">
          <p>
            Not a member? <Link to="/signin">Register</Link>
          </p>
          <p>or sign up with:</p>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn floating color="secondary" className="mx-1">
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </div>
      </form>
    </div>
  );
};

export default Login;
