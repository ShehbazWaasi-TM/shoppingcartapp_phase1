import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Addtocart = ({count}) => {
  return (
    <>
    <div className='cart-nav'>
       <span>Continue Shopping</span>
       <div>
       <AiOutlineShoppingCart  style={{width : "60px"}} className='cart-icon' />
       <span className='cart-count'>{count}</span>
       </div>
    </div>   
    </>
  )
}

export default Addtocart