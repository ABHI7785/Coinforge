import React from 'react'
import'./Style/Contactinformation.css'
import {useNavigate} from 'react-router-dom'

const ContactInformation = () => {
    const navigate=useNavigate()
  return (
    <div className='contact-infoo'>
         <div className="contact-section">
        <h2 className="contact-heading">Contact Information</h2>
        <p className="contact-paragraph1">
          For questions or concerns regarding our terms and conditions, please
          contact us at:
        </p>
        <p className="contact-paragraph2">
          Email: <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a>
        </p>
        <p className="contact-paragraph3">
          Customer Support Phone Number: <a href="tel:+11234567890">+1-123-456-7890</a> (Monday to Friday, 9:00 AM - 5:00 PM GMT)
        </p>
        <p className="contact-paragraph4">
          Headquarters Address:
          <br />
          123 Main Street
          <br />
          Anytown, USA
          <br />
          ZIP Code: 12345
        </p>
       
      </div>
      <div>
        <button onClick={()=>{navigate("/secuinfo")}} className='conttt'> Continue</button>
      </div>

    </div>
  )
}

export default ContactInformation