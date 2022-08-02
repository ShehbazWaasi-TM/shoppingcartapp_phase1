import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Addtocart from './Addtocart'

const Cartpage = ({cartItems,total,count}) => {
  console.log("render", cartItems)
  const history = useNavigate()
  const handleClick = () =>{
    history('/Products')
  }
  return (
    <>
    <div className='mycart'>
      <Addtocart cartItem={cartItems} count={count} />
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
        {cartItems && cartItems.map((cartItem)=>{
        return(
        <tr key={cartItem.id}>
          <td><img className='img-in-cart' src={cartItem.thumbnail} alt="error img" /></td>
          <td>{cartItem.brand}</td>
          <td>rating {cartItem.rating}</td>
          <td>Price Rs: {cartItem.price}</td>
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