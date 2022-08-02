import './App.css';
import {React, useState} from 'react';
import Login from './components/Login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Cartpage from './components/Cartpage';
import Placeorder from './components/Placeorder';
import Orderplaced from './components/Orderplaced';


function App()  {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [orderAddress, setOrderAddress] = useState()
  const [countItems, setCountItems] = useState(0)


  const onAdd = (data) => {
    setCartItems([...cartItems, { ...data, quantity: 1 }]);
    console.log("data", data)
    setTotal(total+data.price)
  };
  console.log("cartitems", cartItems)
  console.log("total is" , total)

  const onOrder = (data) =>{
    console.log("onOrder" , data)
    setOrderAddress(data)
  }

  const onCount = (data) =>{
    console.log("onCount", data)
    setCountItems(data)
  }

  const FinalTotal = (data) =>{
    setTotal(total-data)
  }

  return(
      <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login />}></Route>  
        <Route path='/Products' element = {<Products onAdd={onAdd} cartItems={cartItems} onCount={onCount}/>}></Route>
        <Route path="/ProductDetails" element={<ProductDetails/>}></Route>
        <Route path="/CartPage" element={<Cartpage cartItems={cartItems} total={total} count={countItems} FinalTotal={FinalTotal}/>}></Route>
        <Route path="/PlaceOrder" element={<Placeorder onOrder={onOrder}/>} ></Route>
        <Route path="/OrderPlaced" element={<Orderplaced address={orderAddress} total={total}/>} ></Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
