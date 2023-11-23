import React from 'react'
import './Style/Security.css'

const Securityinfo = () => {
  return (
    <div className='security'>
        <h2>Security Information</h2>
        <div className='seci'>
        <ul>
            <h4>Account Security:</h4>
            <li>Explain the importance of keeping login credentials (username and password) secure and confidential.</li>
            <li>Encourage users to create strong and unique passwords.</li>
            <li>Recommend enabling two-factor authentication (2FA) for added security.</li>
        </ul>

        </div>

        <div className='seci'>
        <h4>Phishing Awareness:</h4>
        <ul>
          <li>Educate users about phishing scams and how to recognize them.</li>
          <li>Advise users to be cautious of unsolicited emails, messages, or links, and to verify the authenticity of communication.</li>
        </ul>
      </div>

      <div className='seci'>
        <h4>Device Security:</h4>
        <ul>
          <li>Recommend users to keep their devices (computers, smartphones, etc.) secure with up-to-date operating systems and antivirus software.</li>
          <li>Explain how using public or shared devices may pose security risks.</li>
        </ul>
      </div>

      <div className='seci '>
        <h4>Secure Connections:</h4>
        <ul>
          <li>Stress the importance of using secure, encrypted connections (HTTPS) when accessing your website.</li>
          <li>Explain that users should verify the website's URL to avoid phishing attempts.</li>
        </ul>
      </div>

      <div className='seci'>
        <h4>Transaction Verification:</h4>
        <ul>
          <li>Describe how users should verify the details of cryptocurrency transactions before confirming them.</li>
          <li>Explain that transactions on the blockchain are irreversible and emphasize the need for caution.</li>
        </ul>
      </div>

      <div className='seci'>
        <h4>Email and Communication Security:</h4>
        <ul>
          <li>Advise users not to share sensitive information via email or unsecured messaging apps.</li>
          <li>Mention that your website will never request sensitive information through email.</li>
        </ul>
      </div>

      <div className='seci'>
        <h4>Suspicious Activity Reporting:</h4>
        <ul>
          <li>Instruct users to report any suspicious or unauthorized account activity promptly.</li>
          <li>Explain the process for reporting such incidents.</li>
        </ul>
      </div>

      <div className='seci'>
        <h4>Third-Party Services:</h4>
        <ul>
          <li>If your website integrates with third-party services (e.g., payment processors or wallet providers), clarify how these services handle security and user data.</li>
        </ul>
      </div>
      <div className='seci'>
        <h4>Data Encryption:</h4>
        <ul>
          <li>Describe the use of encryption technologies to protect user data and financial information during transmission and storage.</li>
        </ul>
      </div>

      <div className='seci'>
        <h4>Incident Response:</h4>
        <ul>
          <li>Explain how your website handles security incidents, including data breaches, and how affected users will be notified.</li>
        </ul>
      </div>
      <div>
        <button className='seccta'> Continue</button>
      </div>




      

    </div>
  )
}

export default Securityinfo