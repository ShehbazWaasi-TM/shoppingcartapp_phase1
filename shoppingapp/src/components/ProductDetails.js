import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Addtocart from './Addtocart';



const ProductDetails = ({values}) => {
  return (
    <>
    <Addtocart />
    <hr/>
    <section className='cart-info'>
      <h6>Shopping cart</h6>
      <p>you have <span>0</span> items in Cart</p>
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
          
        </div>
    </div>
   
      
    </>
  )
}

export default ProductDetails
