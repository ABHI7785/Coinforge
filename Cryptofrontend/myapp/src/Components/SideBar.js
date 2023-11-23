import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import {} from "react-icons";
import './Style/Sidebar.css'
import {AiOutlineMessage} from 'react-icons/ai'
import {BiCoinStack} from 'react-icons/bi'
import{AiOutlineHome,AiOutlineUser} from 'react-icons/ai'

function SideBar() {
  
  const [show, setShow] = useState(false);



  return (
    <div className="sidebarmain">
        
    <div className={`sidebar${show ? " active" : ""}`}>
      <div className="sidebar-header">
        <h3>MENU</h3>
        
      </div>
      <Nav className="flex-column">
        <Nav.Link href="/adminquerytable">
          <span className="sidebar-text"><AiOutlineMessage/>   QUERY</span>

        </Nav.Link>
        
        
        <Nav.Link href="/admincart">
          {/* <FaUser className="sidebar-icon" /> */}
          <span className="sidebar-text"><BiCoinStack/>   COINS</span>
        </Nav.Link>

        <Nav.Link href="/adminuser">
          {/* <FaUser className="sidebar-icon" /> */}
          <span className="sidebar-text"><AiOutlineUser/>   USERS</span>
        </Nav.Link>

     

        <Nav.Link href="/">
          {/* <FaUser className="sidebar-icon" /> */}
          <span className="sidebar-text"><AiOutlineHome/>   HOME</span>
        </Nav.Link>
       

        
       

       

       
      </Nav>
    </div>
    </div>
  );
}

export default SideBar;
