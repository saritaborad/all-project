import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function App() {
  const [product, setproduct] = useState({
    name: "React",
    price: 10,
  });
  const [token1, setToken] = useState(null);

  const makePayment = (token) => {
    setToken(token);
    console.log(token);
  };

  useEffect(() => {
    // const makeRequest = () => {
    //   const body = {
    //     tokenId: token1.id,
    //     amount: 2000,
    //   };
    //   const headers = {
    //     "Content-Type": "application/json",
    //   };

    //   return fetch(`http://localhost/5000/api/checkout/payment`, {
    //     method: "POST",
    //     headers: headers,
    //     body: JSON.stringify(body),
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       // const { status } = response;
    //       // console.log("STATUS", status);
    //     })
    //     .catch((error) => console.log(error));
    // };

    const makeRequest = async () => {
      // const config = {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //   },
      // };
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: token1.id,
            amount: 2000,
          }
        );
        console.log(res);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    token1 && makeRequest();
  }, [token1]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StripeCheckout
          name="ecommerce"
          billingAddress
          shippingAddress
          description="your total is"
          amount={2000}
          token={makePayment}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
          name="Buy React"
        />
      </header>
    </div>
  );
}

export default App;
