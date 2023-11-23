import React from 'react'
import './Style/Footerr.css'
import{BsFacebook,BsInstagram,BsTwitter,BsYoutube} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footerr = () => {
  return (
    <div className='footer'>
        <div className='col-3' id='fo1'>
            <h4>COINFORGE</h4>



        </div>
        <div className='col-6' id='fo2'>
            <h5> © 2023 Powered By COINFORGE , All Rights Reserved.. </h5>

        </div>
        <div className='col-3'>
            <ul className='socialmedia'>
              <Link to="https://www.facebook.com/login/">  <li><BsFacebook/></li></Link>
                <Link to="https://www.instagram.com/"><li><BsInstagram/></li></Link>
                <Link to="https://about.twitter.com/en"> <li><BsTwitter/></li></Link>
                <Link to="https://www.youtube.com/"> <li><BsYoutube/></li></Link>
               

               
                
            </ul>

        </div>

    </div>
  )
}

export default Footerr