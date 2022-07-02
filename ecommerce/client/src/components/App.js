import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/add" element={<h1>Add Product</h1>} />
          <Route path="/update" element={<h1>Update Product</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
