import React from 'react'
import'./Style/Termcon.css'
import {useNavigate} from 'react-router-dom'

const Termscon = () => {
    const navigate=useNavigate()
  return (
    <div className='termscon'>
        <h2>Terms and Conditions</h2>
        <ul className='termc'>
    <li>User Agreement: Begin with a statement that outlines the agreement between the user and your website.</li>
    <li>Acceptance of Terms: Clarify that by using your website or services, users automatically agree to abide by these terms and conditions.</li>
    <li>Eligibility: Specify the minimum age and any other requirements for using your services.</li>
    <li>Account Registration: Detail the process of user registration, including the creation of usernames and passwords.</li>
    <li>User Responsibilities: Describe the user's responsibilities, including maintaining the confidentiality of their login information and not sharing it with others.</li>
    <li>Privacy Policy: Reference your website's privacy policy and how user data is collected, stored, and used.</li>
    <li>Prohibited Activities: Enumerate activities that are not allowed on your platform, such as fraud, illegal activities, or harassment.</li>
    <li>Intellectual Property: Outline your website's rights over its content and user-generated content, as well as any permitted or prohibited uses of your content.</li>
    <li>Financial Transactions: Explain how financial transactions, including cryptocurrency purchases, are processed and any associated fees or charges.</li>
    <li>Dispute Resolution: Specify the process for resolving disputes between users and your website, including any arbitration or mediation procedures.</li>
    <li>Termination: Describe the circumstances under which user accounts may be terminated, either by the user or by your website.</li>
    <li>Liability Disclaimer: Clarify that your website is not responsible for any losses or damages incurred by users in connection with cryptocurrency investments or any other activities on the platform.</li>
    <li>Risk Disclosure: Highlight the inherent risks associated with cryptocurrency investments and the importance of conducting one's research and seeking professional advice.</li>
    <li>Regulatory Compliance: Explain your commitment to complying with relevant cryptocurrency regulations and the expectation that users will do the same.</li>
    <li>Communication: Describe how your website will communicate with users, including through email notifications and updates.</li>
    <li>Changes to Terms: Reserve the right to modify the terms and conditions and explain how users will be notified of changes.</li>
    <li>Governing Law: Indicate the governing law and jurisdiction under which any legal disputes will be resolved.</li>
    <li>Severability: State that if any part of the terms and conditions is found to be unenforceable, the rest of the agreement remains in effect.</li>
    <li>Contact Information: Provide contact information for users to reach out for support or questions regarding the terms and conditions.</li>
    <li>Last Updated Date: Include the date of the last update to the terms and conditions to indicate when changes were made.</li>
</ul>
<div>
<label for="agree" className='labell'>
  <input type="checkbox" id="agree" name="agree"/>
  I agree to the terms and conditions
</label><br/>
<button onClick={()=>{navigate("/contactinfo")}} className='ctacon'>Continue</button>
</div>


    </div>
  )
}

export default Termscon