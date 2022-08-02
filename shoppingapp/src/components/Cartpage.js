import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Addtocart from './Addtocart'
import {AiFillDelete} from "react-icons/ai"

const Cartpage = ({cartItems,total,count}) => {
  const [myCart,setMyCart] = useState(cartItems)
  const [newCount, setMyCount] = useState(count)
  console.log("render", cartItems)
  const history = useNavigate()
  const handleClick = () =>{
    history('/Products')
  }
  
  //removeing product
  const removeEle = (id) =>{
    const myNewCartItems = myCart.filter((ele)=>{
      return ele.id !== id
    })
    setMyCart(myNewCartItems)
    setMyCount(newCount-1)
  }
  return (
    <>
    <div className='mycart'>
      <Addtocart cartItem={cartItems} count={newCount} />
      <button onClick={handleClick}>go back</button>
      <div className="table-content">
      <table className='table-cart'>
        <thead>
          <tr>
            <th>sample</th>
            <th>brand</th>
            <th>rating</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {myCart && myCart.map((cartItem)=>{
        return(
        <tr key={cartItem.id}>
          <td><img className='img-in-cart' src={cartItem.thumbnail} alt="error img" /></td>
          <td>{cartItem.brand}</td>
          <td>rating {cartItem.rating}</td>
          <td>Price Rs: {cartItem.price}</td>
          <td><button onClick={(()=>removeEle(cartItem.id))}><AiFillDelete/></button></td>
        </tr>
        )})}
        </tbody>
      </table>
      </div>
    </div>
    <h3 className='total-price'>Total price : {total} <Link to="/PlaceOrder"><button>checkout</button></Link></h3>   
    </>
  )
}

export default Cartpage