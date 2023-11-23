import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import'./Style/Coin.css'
import { useNavigate } from 'react-router-dom';
const Coin = () => {
  const navigate = useNavigate();
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getcrypto");
      setCoins(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredCoins = coins?.filter((data) =>
    String(data.name)?.includes(searchTerm) ||
    String(data.symbol)?.includes(searchTerm)
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='apicall'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name or symbol"
      />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {filteredCoins?.map((data, index) => {
          
          return (
            <div key={index} style={{ margin: '10px' }}>
              <Card  className="api"style={{ width: '18rem' }}>
                <Card.Img className='apiimage' variant="top" src={data.image} />
                <Card.Body>
                  <div className='card-content'>

                  <Card.Title><h2 className='namme'>{data.name}</h2></Card.Title>
                  <Card.Title><p className='symb'>{data.symbol}</p></Card.Title>
                  <Card.Title><p className='same'>Current Price: {data.current_price}</p></Card.Title>
                  <Card.Title><p className='same'>Market Capital: {data.market_cap}</p></Card.Title>
                  <Card.Title><p className='same'>Market Capital Rank: {data.market_cap_rank}</p></Card.Title>
                  <Card.Title><p className='same'>Price Change 24H: {data.price_change_24h}</p></Card.Title>
                  <Card.Title><p className='same'>Total Supply: {data.total_supply}</p></Card.Title>
                  <Card.Title><p className='same1'>Total Volume: {data.total_volume}</p></Card.Title>
               
                  

          </div>
                  <Button className='api1' variant="primary"   onClick={() => {
                    // Navigate to /view-coin/:id and pass the data object
                    navigate(`/view-coin/${data._id}`, { state: { coinData: data } });
                  }} >Buy now</Button>
                </Card.Body>
              
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coin;
