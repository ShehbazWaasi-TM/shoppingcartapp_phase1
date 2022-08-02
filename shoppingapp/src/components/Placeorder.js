import React, { useState,createContext, Children } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Addtocart from './Addtocart'

const orderContext = createContext()

const Placeorder = ({onOrder}) => {
    const history = useNavigate()
    const [address, setAddress] = useState("")
    const [error, setError] = useState("")
    console.log("address", address)
   
    const orderReady = (e) =>{
        e.preventDefault()
        if (address!==""){
            history('/OrderPlaced')
            onOrder(address)
        }
        else{
            setError("Fill the address")
        }
    }
  return (
    <div className='placeOrder'>
      <Addtocart/>
        <form action="" className='place-order-form' onSubmit={orderReady} >
            <div>
            <label htmlFor="">Address:</label>
            <input className='address-box' type="text"
              placeholder='enter the address'
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
             />
             {error!==""?<p>{error}</p>:""}
            </div>
            <div>
                <button type='submit'>Place order</button>
            </div>
        </form>
      <Link to="/CartPage"><button>go back</button></Link>
    </div>
  )
}

export default Placeorder;
export {orderContext};
