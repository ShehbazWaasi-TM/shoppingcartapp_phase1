import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Addtocart = () => {
  return (
    <>
    <div className='cart-nav'>
       <span>Continue Shopping</span>
       <AiOutlineShoppingCart  style={{width : "60px"}} className='cart-icon'/>
    </div>   
    </>
  )
}

export default Addtocart