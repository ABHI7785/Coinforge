import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Style/View.css";
import axios from "axios";
const ViewCoin = () => {
  const location = useLocation();
  const coinData = location.state.coinData;
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState("");
  const [name1, setName] = useState(coinData.name);
  const [symbol1, setsymbol] = useState(coinData.symbol);
  const [current_price1, setcurrent_price] = useState(coinData.current_price);
  const [mail, setmail] = useState("");

  const Addcart = async () => {
    const totalvalue = quantity * current_price1;
    const addteammem = await axios.post("http://localhost:5000/createcart", {
      name1,
      symbol1,
      current_price1,
      quantity,
      total: totalvalue,
      mail
    });

    navigate("/purchaseconfirm");
    console.log(addteammem.data);
  };

  const navigate = useNavigate();

  return (
    <div className="buymain">
      <div className="viewcoin">
        <h3>COIN DETAILS</h3>
        <div style={{ margin: "10px" }}>
          <Card className="view">
            <Card.Img
              className="viewimage"
              variant="top"
              src={coinData.image}
            />
            <Card.Body>
              <div className="card-content">
                <Card.Title>
                  <h2 className="namme">{coinData.name}</h2>
                </Card.Title>
                <Card.Title>
                  <p className="symb">{coinData.symbol}</p>
                </Card.Title>
                <Card.Title>
                  <p className="same">
                    Current Price: {coinData.current_price}
                  </p>
                </Card.Title>
                <Card.Title>
                  <p className="same">Market Capital: {coinData.market_cap}</p>
                </Card.Title>
                <Card.Title>
                  <p className="same">
                    Market Capital Rank: {coinData.market_cap_rank}
                  </p>
                </Card.Title>
                <Card.Title>
                  <p className="same">
                    Price Change 24H: {coinData.price_change_24h}
                  </p>
                </Card.Title>
                <Card.Title>
                  <p className="same">Total Supply: {coinData.total_supply}</p>
                </Card.Title>
                <Card.Title>
                  <p className="same1">Total Volume: {coinData.total_volume}</p>
                </Card.Title>

                <Card className="buycardd">
                  <Card.Body className="d-flex flex-column align-items-center">
                    <Card.Title>Card Title</Card.Title>
                    <div className="text-center mb-4">
                      <h1 className="card-title"> Crypto Purchase Form</h1>
                      <p className="" style={{ color: "white" }}>
                        Please provide the quantity.{" "}
                      </p>
                    </div>
                    <Form className="w-100">
                      <Form.Group controlId="formBasicPublicationsName">
                        <Form.Label style={{ color: "white" }}>
                          Coin Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PublicationsName"
                          value={name1}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          disabled
                        />
                      </Form.Group>
                    </Form>

                    <Form className="w-100">
                      <Form.Group controlId="formBasicPublicationsName">
                        <Form.Label style={{ color: "white" }}>
                          Current Price
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PublicationsName"
                          value={current_price1}
                          onChange={(e) => {
                           const newCurrentPrice = e.target.value;
                           setcurrent_price(newCurrentPrice)
                           const totalvalue= quantity* newCurrentPrice
                           setTotal(totalvalue)
                          }}
                          disabled
                        />
                      </Form.Group>
                    </Form>

                    <Form className="w-100">
                      <Form.Group controlId="formBasicPublicationsName">
                        <Form.Label style={{ color: "white" }}>
                          Quantity
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PublicationsName"
                          value={quantity}
                          onChange={(e) => {
                           const newQuantity = e.target.value;
                           setQuantity(newQuantity)
                           const totalvalue=newQuantity * current_price1
                           setTotal(totalvalue);
                          }}
                          
                        />
                      </Form.Group>
                    </Form>


                    <Form className="w-100">
                      <Form.Group controlId="formBasicPublicationsName">
                        <Form.Label style={{ color: "white" }}>
                          Symbol
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PublicationsName"
                          value={symbol1}
                          onChange={(e) => {
                            setsymbol(e.target.value);
                          }}
                          
                          disabled
                        />
                      </Form.Group>
                    </Form>


                    <Form className="w-100">
                      <Form.Group controlId="formBasicPublicationsName">
                        <Form.Label style={{ color: "white" }}>
                          Total
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PublicationsName"
                          value={total}
                          onChange={(e) => {
                            setTotal(e.target.value);
                          }}
                          disabled
                        />
                      </Form.Group>
                    </Form>

                    <Form className="w-100">
                      <Form.Group controlId="formBasicPublicationsName">
                        <Form.Label style={{ color: "white" }}>
                          Mail-Id
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="PublicationsName"
                          value={mail}
                          onChange={(e) => {
                            setmail(e.target.value);
                          }}
                          
                        />
                      </Form.Group>
                    </Form>


                    <button
          onClick={Addcart}
          className="purchasee"
        >
          PURCHASE
        </button>




                  </Card.Body>
                </Card>
              </div>
            </Card.Body>
          </Card>
        </div>


        

      </div>



      {/* <div className="butbutt" style={{ display: "flex" }}>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="ctabuy"
        >
          Login to continue
        </button>
        <button
          onClick={() => {
            navigate("/purchaseconfirm");
          }}
          className="ctabuyy"
        >
          Already Login Click here
        </button>
      </div> */}
      
    </div>
  );
};

export default ViewCoin;
