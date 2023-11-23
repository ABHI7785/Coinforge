import React from 'react'
import'./Style/Navbar.css'
import img from './Images/Bitcoin.webp'
import img1 from './Images/features2.jpg'
import{ Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate=useNavigate();

  
  return (
    

<div className='navbar'>
    <div className='background'>
    <header className="header">
            <ul>
                <li><img className='img1' src={img} alt=''></img></li>
                <div className="lists">
                    
                  <li className="list">Home</li>
                  <li className="list">About</li>
                  <li onClick={() => { navigate("/ContactForm") }} className="list">Message</li>

                  <li onClick={()=>{navigate("/Admin")}} className="list">Admin</li>
                  <li className='loo'>
    <Link to='/login'>
      <Button variant='primary'>LOG IN</Button>
    </Link>
  </li>

                </div>
                

            </ul>

        </header>

        <div className='bg-sec'>
            <div className='col-7' id='col5'>
                <h5>EXCHANGE PLATFORM</h5>
                <h2>Create, hold or<br/> trade cryptocurrency</h2>
                <h4>Bitcoin is a decentralized digital currency. Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. The cryptocurrency was invented in 2008 by an unknown entity under the name Satoshi Nakamoto. </h4>


            </div>
            <div className='col-5' id='bg'>
                <img className='image1' src={img1} alt=''></img>
                

            </div>

        </div>
        <div className='clients'>
            <div className='col-9' id='col66'>
                <div className='client'>
                    <h2>5555</h2>
                    <h5>Wallets</h5>

                </div>
                <div className='wallet'>
                <h2>2222</h2>
                    <h5>Clients</h5>

                </div>
                <div className='trade'>
                <h2>6666</h2>
                    <h5>Traders</h5>

                </div>

            </div>
            
            <div className='col-3'>

            </div>
            
             
        </div>
        <div className='cta1'>
            
            <button className='cta11' onClick={()=>{
                navigate("/createprofile")
            }}> Create a profile</button>

        </div>
       

        

    </div>
    
    
        
        

    </div>

    
  )
}

export default Navbar