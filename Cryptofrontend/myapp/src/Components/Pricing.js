import React from 'react'
import'./Style/Pricing.css'

const Pricing = () => {

  return (
    <div className='pricing'>
        <h2>PRICING</h2>
        <div className='priceparent'>
           <div className='col-4' id='prione'>
            <h4>STARTER</h4>
           <p>The Starter Package is designed for beginner traders who are looking to dip their toes into the world of trading. It offers essential tools and resources to get started on your trading journey</p>
           <ul className='pri1'>
            <li>Package Includes:</li>
            <li>Basic Trading Education: Access to introductory trading courses and materials to build your foundational knowledge.</li>
            <li>Trading Platform: A user-friendly trading platform with essential features for executing trades</li>
            <li>Market News and Updates: Regular updates on market news and trends to help you make informed decisions</li>
            <li>Customer Support: Basic customer support for any questions or issues you may encounter</li>
           </ul>
           <h3>$100Per/month

           </h3>
           <button className='price1'>SUBSCRIBE</button>



           </div>
           <div className='col-4' id='pritwo'>
            <h4>PRO</h4>
            <p>The Pro Package is ideal for intermediate traders who have some experience and want to take their trading to the next level. It provides a more robust set of tools and resources.</p>
            <ul className='pri2'>
                <li>Package Includes:</li>
                <li>Advanced Trading Education: Access to a comprehensive library of advanced trading courses and analysis tools.</li>
                <li>Premium Trading Platform: A feature-rich trading platform with advanced charting, technical analysis, and order types.</li>
                <li>Real-time Market Data: Access to real-time market data and advanced charting tools.</li>
                <li>Trading Signals: Receive trading signals and alerts to help you spot potential opportunities.</li>
                <li>Dedicated Support: Priority customer support with faster response times.</li>

            </ul>
            <h3>$150Per/month</h3>
            <button className='price2'>SUBSCRIBE</button>

           </div>
           <div className='col-4' id='prithree'>
            <h4>ELITE</h4>
            <p>The Elite Package is for experienced and professional traders who demand the highest level of resources and support. It provides a complete trading ecosystem to maximize your trading potential.</p>
            <ul className='pri3'>
                <li>Package Includes:</li>
                <li>Expert Trading Education: Access to expert-level trading courses, strategies, and research materials.</li>
                <li>Advanced Trading Platform: A cutting-edge trading platform with algorithmic trading capabilities, custom indicators, and automation tools.</li>
                <li>Institutional-Grade Data: Access to institutional-grade market data, including Level II quotes and historical data.</li>
                <li>Personalized Trading Analysis: Customized trading analysis and recommendations tailored to your trading style.</li>
                <li>24/7 Priority Support: Round-the-clock priority support with dedicated account managers.</li>
                <li>Exclusive Events and Seminars: Invitations to exclusive trading events, webinars, and seminars with industry experts.</li>
            </ul>
            <h3>$200Per/month</h3>
            <button className='price3'>SUBSCRIBE</button>

           </div>
            




        </div>

        
        

        


    </div>
  )
}

export default Pricing