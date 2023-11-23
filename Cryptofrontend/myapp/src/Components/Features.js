import React from 'react';
import { Card } from 'react-bootstrap';
import './Style/Features.css';

const Features = () => {
  const feature = [
    {
      img:
        'https://images.pexels.com/photos/14354107/pexels-photo-14354107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'CRYPTO WALLETS',
      definition:
        'A cryptocurrency wallet is a device, physical medium, program or a service which stores the public and/or private keys for cryptocurrency transactions. In addition to this basic function of storing the keys, a cryptocurrency wallet more often offers the functionality of encrypting and/or signing information',
    },
    {
      img:
        'https://images.pexels.com/photos/6770774/pexels-photo-6770774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'MARGIN TRADE',
      definition:
        'Margin Trading enables investors to buy/sell more and thus increases their profits if the prices move on expected lines. But, on the other hand, it also amplifies the loss if the prices behave contrary to expectations. This amplification effect emanating from the leveraged nature of the transaction is the primary motivation for a client to undertake margin trading.',
    },
    {
      img:
        'https://images.pexels.com/photos/2228570/pexels-photo-2228570.jpeg?auto=compress&cs=tinysrgb&w=600',
      name: 'SWING TRADING',
      definition:
        'Swing trading exposes a trader to overnight and weekend risk, where the price could gap and open the following session at a substantially different price.',
    },
    {img:"https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600",name:"BLOCK CHAIN",definition:"Blockchain technology records and confirms cryptocurrency trades, much like a digital ledger. A blockchain collects and stores the information when you buy, sell, or exchange cryptocurrency. This information stays in a secure location that’s not under a centralized government overseeing or controlling the cryptocurrency market. Many professionals consider crypto coins a “global currency” because they hold the same value worldwide."},
    {img:"https://images.pexels.com/photos/14911394/pexels-photo-14911394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",name:"SAFE AND SECURE",definition:"No one can access your funds unless they gain access to your crypto wallet’s private key. In case you forget or lose your key then you cannot recover your funds. Further, the transactions are secured by the blockchain system along with the scattered network of computers that verify the transactions. It’s more secure if investors keep crypto assets in their own wallets. The transactions are secured by the usage of public and private keys, proof of work or proof of stake and other various forms of incentive systems. "},
    {img:"https://static.news.bitcoin.com/wp-content/uploads/2022/10/shutterstock_1936104181.jpg",name:"SECURITY", definition:"We chose Trezor as best for security because it comes with the strongest security features and track record of any reviewed hardware wallet. Trezor, like Ledger, is a name synonymous with crypto cold wallet storage."}
  ];

  return (
    <div className='main'>
        <h4>FEATURES</h4>
         <div className='feature_sec'>
    
    {feature.map((data, index) => {
      return (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img className="feaimg" variant="top" src={data.img} />
          <Card.Body>
            <Card.Title className='ctite'>{data.name}</Card.Title>
            <Card.Text className='ctext'>{data.definition}</Card.Text>
          </Card.Body>
        </Card>
      );
    })}
  </div>


    </div>
   
  );
};

export default Features;
