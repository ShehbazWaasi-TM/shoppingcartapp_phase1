import './App.css';
import Login from './components/Login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';


function App()  {
  return(
      <div className='App'>
        
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login />}></Route>  
        <Route path='/Products' element = {<Products />}></Route>
        <Route path="/ProductDetails" element={<ProductDetails/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <ProductContext><ProductDetails/></ProductContext> */}
      </div>
  );
}

export default App;
