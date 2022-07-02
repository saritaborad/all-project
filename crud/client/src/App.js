import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

function App() {
  const responseSuccessGoogle = (response) => {
    console.log("my", response);
    axios({
      method: "POST",
      url: "http://localhost:3001/api/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => console.log("Google login success", response));
  };

  const responseFailureGoogle = (response) => {};

  const responseFacebook = (response) => {
    console.log(response);
  };
  // const [foodName, setfoodName] = useState("");
  // const [days, setDays] = useState(0);
  // const [foodList, setfoodList] = useState([]);
  // const [newFoodName, setnewFoodName] = useState("");

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/read").then((res) => {
  //     console.log(res.data);
  //     setfoodList(res.data);
  //   });
  //   return () => {};
  // }, []);

  // const addToList = () => {
  //   console.log(foodName);
  //   Axios.post("http://localhost:3001/insert", {
  //     foodName: foodName,
  //     days: days,
  //   });
  // };

  // const updateFood = (id) => {
  //   Axios.put("http://localhost:3001/update", {
  //     id: id,
  //     newFoodName: newFoodName,
  //   });
  // };

  // const deleteFood = (id) => {
  //   Axios.delete(`http://localhost:3001/delete/${id}`);
  // };

  return (
    <div className="App">
      {/* <h1> CRUD APP with MERN</h1>
      <label>Food Name:</label>
      <input type="text" onChange={(e) => setfoodName(e.target.value)} />
      <label>Days Since You Ate It:</label>
      <input type="number" onChange={(e) => setDays(e.target.value)} />
      <button onClick={addToList}>Add To List</button>

      <h1>Food List</h1>
      {foodList.map((val, key) => {
        return (
          <div className="food">
            <h1>{val.foodName} </h1>
            <h1>{val.daysSinceIate}</h1>
            <input
              type="text"
              placeholder="New Food Name..."
              onChange={(e) => setnewFoodName(e.target.value)}
            />
            <button onClick={() => updateFood(val._id)}>Update</button>
            <button onClick={() => deleteFood(val._id)}>Delete</button>
          </div>
        );
      })} */}

      <div className="col-md-6 offset-md-3 text-center">
        <h1>Login with Google</h1>
        <GoogleLogin
          clientId="233406106766-jv8mnd2i87lealbgffe6oo4gmh5ss943.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseFailureGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <div className="col-md-6 offset-md-3 text-center">
        <FacebookLogin
          appId="403181485022011"
          autoLoad={false}
          callback={responseFacebook}
        />
      </div>
    </div>
  );
}

export default App;
