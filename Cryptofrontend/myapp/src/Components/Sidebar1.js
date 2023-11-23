import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {} from "react-icons";
import './Style/Sidebar1.css'
import {AiOutlineMessage} from 'react-icons/ai'
import {BiCoinStack} from 'react-icons/bi'
import{AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import imga from './Images/abhi.jpg'

function SideBar1() {
  
  const [show, setShow] = useState(false);



  return (
    <div style={{display:"flex"}} className="sidebarmainn">
       
       
        <div className="col-3">
    <div className={`sidebar1${show ? " active" : ""}`}>
      <div className="sidebar-headerr">
        <h3>MENU</h3>
        
      </div>
      <Nav className="flex-column">
        <Nav.Link href="/adminquerytable">
          <span className="sidebar-textt"><AiOutlineMessage/>   QUERY</span>

        </Nav.Link>
        
        
        <Nav.Link href="/admincart">
          {/* <FaUser className="sidebar-icon" /> */}
          <span className="sidebar-textt"><BiCoinStack/>   COINS</span>
        </Nav.Link>

        <Nav.Link href="/adminuser">
          {/* <FaUser className="sidebar-icon" /> */}
          <span className="sidebar-textt"><AiOutlineUser/>   USERS</span>
        </Nav.Link>

        <Nav.Link href="/">
          {/* <FaUser className="sidebar-icon" /> */}
          <span className="sidebar-textt"><AiOutlineHome/>   HOME</span>
        </Nav.Link>
       

        
       

       

       
      </Nav>
    </div>
    </div>
    <div className="col-9">
        <h2>YOUR DOMAIN, WELCOME IN!</h2>
        <h4>Hello, Boss, you are in control here, and we're excited to have you. Please come in and make the most of your admin privileges
        Thank you for clicking your way to us. Welcome to our web family.
        </h4>
        <img src={imga} alt=""></img>
        </div>
    </div>
  );
}

export default SideBar1;
