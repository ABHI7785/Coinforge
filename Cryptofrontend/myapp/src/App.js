import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Flatform from "./Components/Flatform";
import Pricing from "./Components/Pricing";
import Team from "./Components/Team";
import Client from "./Components/Client";
import "./Components/Style/Client.css";
import Toptraders from "./Components/Toptraders";
import Signin from "./Components/Signin";
import Login from "./Components/Login";
import Coin from "./Components/Coin";
import Mapgoogle from "./Components/Mapgoogle";
import ViewCoin from "./Components/ViewCoin";
import Tablee from "./Components/Tablee";
import Purchaseconfirmation from "./Components/Purchaseconfirmation";
import Termscon from "./Components/Termscon";
import ContactInformation from "./Components/ContactInformation";
import Securityinfo from "./Components/Securityinfo";
import Footerr from "./Components/Footerr";
import ContactForm from "./Components/ContactForm";
import Admin from "./Components/Admin";
import Adminquerytable from "./Components/Adminquerytable";
import Viewwquery from "./Components/Viewwquery";
import Admingetcoin from "./Components/Admingetcoin";
import Viewcoin1 from "./Components/Viewcoin1";
import SideBar from "./Components/SideBar";
import SideBar1 from "./Components/Sidebar1";
import Createprofile from "./Components/Createprofile";
import Viewuser from "./Components/Viewuser";
import Adminuserpro from "./Components/Adminuserpro";

function App() {



  const [formData, setFormData] = useState([]); // State to store form data

  // Callback function to update form data when ContactForm submits
  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/view-coin/:name" element={<ViewCoin />} />
          <Route path="/createuser" element={<Tablee />} />
          <Route path="/purchaseconfirm" element={<Purchaseconfirmation />} />
          <Route path="/termcondition" element={<Termscon />} />
          <Route path="/contactinfo" element={<ContactInformation />} />
          <Route path="/secuinfo" element={<Securityinfo />} />
          <Route
            path="/ContactForm"
            element={<ContactForm/>} 
          />
          <Route path="/Admin" element={<Admin formData={formData} />} />

          <Route path="/adminquerytable" element={<><Adminquerytable/></>} />
          <Route path="/viewquery.js/:_id" element={<Viewwquery/>} />
          <Route path="/viewuser.js/:_id" element={<Viewuser/>} />
          <Route path="/displaycoins" element={<Coin/>} />
          <Route path="/viewcoindet.js/:_id" element={<ViewCoin/>} />
          <Route path="/admincart" element={<Admingetcoin/>} />
          <Route path="/viewcoin1.js/:_id" element={<Viewcoin1/>} />
          <Route path="/sidebar" element={<SideBar/>}/>
          <Route path="/sidebar1" element={<SideBar1/>}/>
          <Route path="/adminuser" element={<Adminuserpro/>} />
          <Route path="/createprofile" element={<Createprofile/>} />

          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Features />
                <Flatform />
                <Pricing />
                <Toptraders />
                <Team />
                <Client />
                {/* <Coin /> */}
                <Mapgoogle />
                <Footerr />
                {/* <Createprofile/> */}
               
                
               
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
