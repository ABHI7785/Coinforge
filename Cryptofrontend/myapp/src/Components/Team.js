import React from 'react'
import img11 from './Images/team2.jpg'
import img22 from './Images/face3.jpg'
import img33 from './Images/team4.jpg'
import img44 from './Images/face2.jpg'
import { Card } from 'react-bootstrap'
import './Style/Team.css'

import{FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'


const Team = () => {
    const teamm=[{img:img11 ,name:"Serah John",role:"Role:Head Trader",desc:"John is the captain of our trading ship, with over a decade of experience in the financial markets. His sharp analytical skills and deep knowledge of trading strategies have consistently delivered impressive returns for our clients. John's ability to navigate through market fluctuations is unparalleled, making him a key asset to our team."},
    {img:img22,name:"Jane Smith",role:"Role: Research Analyst",desc:"Jane is the brain behind our trading decisions. Her meticulous research and data-driven approach provide valuable insights that guide our investment strategies. With a master's degree in finance and a passion for market analysis, Jane ensures that we are always one step ahead in the trading game."},
    { img:img33,name:"Michael Lita",role:"Role: Risk Manager",desc:"Michael is our risk management guru. With a background in quantitative finance, he keeps a watchful eye on our portfolios to ensure they remain balanced and aligned with our clients' risk tolerance. Michael's skill in mitigating potential losses while maximizing profits is the cornerstone of our risk management strategy."},
    {img:img44,name:"Emily Garcia",role:"Project Manager",desc:"Emily is the friendly face of our trading team. She understands that trust and communication are paramount in the world of finance. Emily keeps our clients informed, addresses their concerns, and ensures a seamless trading experience. Her dedication to client satisfaction sets us apart in the industry."}]
  return (
    <div className='Trade-team'>
        <h2>TRADERS TEAM</h2>
        <div className='team-sec'>

        {

teamm.map((data)=>{
    return(
        <>
      <Card id='card2' style={{ width: '18rem' }}>
<Card.Img  id="teamm" variant="top" src={data.img} />
<Card.Body>
<Card.Title>{data.name}</Card.Title>
<Card.Title>{data.role}</Card.Title>
<Card.Text>
{data.desc}

</Card.Text>
<div className='socialmedia'>
    <ul>
        <li><FaFacebookSquare/></li>
        <li><FaTwitterSquare/></li>
        <li><FaInstagramSquare/></li>
    </ul>

</div>

</Card.Body>
</Card>
        
        </>
    );
})
}
            
        </div>
        

    </div>
  )
}

export default Team