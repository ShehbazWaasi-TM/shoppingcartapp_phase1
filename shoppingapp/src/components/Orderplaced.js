import React from 'react'
import { FaCheckCircle} from "react-icons/fa";

const Orderplaced = ({address,total}) => {
  console.log("this is address", address)
  return (
    <div  className="orderplaced">
      <FaCheckCircle style={{"width":"150px", "height":"200px"}}/>
      <p>Order placed</p>
      <h5>order is placed for rupees {total} successfully at the address {address}</h5>
      
    </div>
  )
}

export default Orderplaced
