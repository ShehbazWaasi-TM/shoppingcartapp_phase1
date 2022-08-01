import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Addtocart = ({count}) => {
  return (
    <>
    <div className='cart-nav'>
       <span>Shopping Cart</span>
       <div>
       <Link to="/CartPage"><AiOutlineShoppingCart  style={{width : "60px"}} className='cart-icon' /></Link>
       <span className='cart-count'>{count}</span>
       </div>
    </div>   
    </>
  )
}

export default Addtocart