import './App.css';
import Login from './components/Login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Products from './components/Products';


function App()  {
  return(
      <div className='App'>
        
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login />}></Route>  
        <Route path='/Products' element = {<Products />}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
