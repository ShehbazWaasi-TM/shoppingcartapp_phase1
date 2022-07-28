import React, { useContext, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Addtocart from './Addtocart';
// import Products from './Products';
import { useNavigate } from 'react-router-dom';



const ProductDetails = ({values}) => {
  // const oneProduct = useContext(ProductContext)
  // console.log("oneproduct", oneProduct)
  let navigate = useNavigate();
  // const [countItems, setCountItems] = useState(0)

  // const continueShopping = () =>{
  //   navigate('/Products')
  // }
  return (
    <>
    {/* <Addtocart count={countItems} /> */}
    <hr/>
    <section className='cart-info'>
      <h6>Shopping cart</h6>
      {/* <p>you have <span>{countItems}</span> items in Cart</p> */}
    </section>
    <div className='product-details'>
    <Carousel >
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={values.images[0]}
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={values.images[1]}
        alt="Second slide"
      />
 
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={values.images[2]}
        alt="Third slide"
      />
 
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={values.images[3]}
        alt="forth slide"
      />
 
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-40"
        src={values.images[4]}
        alt="fifth slide"
      />
 
    </Carousel.Item>
  </Carousel>
        <div className="card-body">
          <h5 className="card-title">{values.brand}</h5>
          <p className="card-text">Price: {values.price} /-</p>

          <p className="card-text">Ratings ⭐ {values.rating}</p>
          <p> {values.description}</p>
          {/* <div>
            <button className='cart-btn' onClick={()=>setCountItems(countItems+1)}   >Add to Cart</button>
    
          </div>
          */}
        </div>
    </div>
   
      
    </>
  )
}

export default ProductDetails
