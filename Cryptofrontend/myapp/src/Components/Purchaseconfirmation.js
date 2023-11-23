import React from 'react'
import'./Style/Purchase.css'
import{useNavigate} from 'react-router-dom'

const Purchaseconfirmation = () => {
    const navigate=useNavigate()
  return (
    <div className='purcahse-main'>
        <h1>Purchase Confirmation Page</h1>
        <div className='instruu'>
            <h4>Important Instructions:</h4>
            <ul className='instru'>
                <li>Please read the following important instructions before proceeding with your cryptocurrency purchase</li>
                <li>Cryptocurrencies are highly volatile and their prices can change rapidly.</li>
                <li>Be aware of the risks associated with cryptocurrency investments</li>
                <li>Ensure that you understand the terms and conditions of this transaction</li>


            </ul>


        </div>
        <div className='instruu'>
            <h4>Legal Disclaimer:</h4>
            <ul className='instru'>
                <li>Please note the following important legal information:</li>
                <li>Cryptocurrency investments are subject to market risks, including potential loss of funds.</li>
                <li>It is your responsibility to comply with relevant tax regulations related to cryptocurrency transactions.</li>
                <li>Our privacy policy governs the handling of your personal information</li>
                <li>We recommend seeking professional financial advice if you are uncertain about your cryptocurrency investment</li>

            </ul>

        </div>
        <div className='termss'>
            <h2>Please Click On Terms and Conditions</h2>

            <button onClick={()=>{navigate("/termcondition")}} className='ctaterm'>Terms & Conditions</button>
        </div>

    </div>
  )
}

export default Purchaseconfirmation