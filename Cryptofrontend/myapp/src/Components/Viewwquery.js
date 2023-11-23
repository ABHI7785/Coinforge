import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';

const Viewwquery = () => {
  const [queryy, setqueryy] = useState([]);
  const { _id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/viewquery/${_id}`)
      .then((res) => setqueryy(res.data))
      .catch((err) => console.log(err));

    console.log('Fetching book data for ID', _id);
  }, [_id]);

  const handleClose = () => {
    history(`/adminquerytable`);
  };

  return (
    <div>
      {queryy.map((res) => (
        <div className="container h-100" key={res._id}>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-md-8 mx-auto">
              <Card className="card border-dark mx-auto mt-5">
                <Card.Body className="h-100">
                  <h3>QUERY DETAILS</h3>
                  <Card.Title> Name: {res.name}</Card.Title>
                  <Card.Text>E-mail: {res.email}</Card.Text>
                  <Card.Text>Message: {res.message}</Card.Text>
                  
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

export default Viewwquery;
