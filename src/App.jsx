// import logo from './logo.svg';
// import { Rate } from "antd";
// import { useState, useEffect } from "react";
import './App.css';
import Cart from "./pages/Cart";
import { Routes ,Route } from 'react-router-dom';
// import { CartProvider } from "react-use-cart"
// import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Cart' element={<Cart/>}/>
      </Routes>
      <div style={{}}>
  

      </div>
      </>
      );
}

export default App;