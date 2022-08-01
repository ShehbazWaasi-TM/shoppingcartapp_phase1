import React, { Children, useContext, useEffect } from 'react'
import { orderContext } from './Placeorder'

const Orderplaced = ({children
}) => {
    const address = useContext(orderContext)
    console.log("order address", address)
    console.log("hello")
  return (
    <div>
      <p>Order placed</p>
      <h6>{address}</h6>
      <orderContext.Provider value={"hello"}>
          {children}               
      </orderContext.Provider>
    </div>
  )
}

export default Orderplaced
