
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

const App = () => {
  const user = true
  return (
    <Router>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/products/:category" element ={< ProductList/>}/>
      <Route path="/cart" element ={< Cart/>}/>
     
      <Route path="/login" element = {user ? <Navigate to ="/"/> : <Login/>} />

      <Route path="/register" element ={user ? <Navigate to ="/"/> : <Register/>}/>
      <Route path="/product/:id" element ={< Product/>}/>
    </Routes>
  </Router>
  );

};


export default App;
