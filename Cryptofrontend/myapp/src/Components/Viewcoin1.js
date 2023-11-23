import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

const Viewcoin1 = () => {
  const [cartt, setcartt] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/viewcartt/${_id}`)
      .then((res) => setcartt(res.data))
      .catch((err) => console.log(err));

    console.log('Fetching book data for ID', _id);
  }, [_id]);

  const handleClose = () => {
    history(`/admincart`);
  };

  return (
    <div>
      {cartt.map((res) => (
        <div className="container h-100" key={res._id}>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-8 mx-auto">
              <Card className="card border-dark mx-auto mt-5">
                <Card.Body className="h-100">
                  <h3> COIN DETAILS</h3>
                  <Card.Title>Name: {res.name1}</Card.Title>
                  <Card.Text>Symbol: {res.symbol1}</Card.Text>
                  <Card.Text>Price: {res.current_price1}</Card.Text>
                  <Card.Text>Quantity: {res.quantity}</Card.Text>
                  <Card.Text>Total: {res.total}</Card.Text>
                  <Card.Text>Mail: {res.mail}</Card.Text>
                  
                </Card.Body>
                <Button
                  variant="light"
                  className="btn-lg btn-block mt-4"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewcoin1;
