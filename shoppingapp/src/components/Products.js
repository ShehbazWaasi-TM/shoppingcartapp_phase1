import React from 'react';
import productsdata from "../products.json"
const Products = () => {
    const allProducts = productsdata.products
    console.log(allProducts)
  return (
    <div className='allProducts'>
        {allProducts.map((singleProduct)=>(
            <div className='singleproduct'>
                <div> <img src={singleProduct.thumbnail} width="350px" height="250px" alt="product Thumbnail"></img></div>
                <div>
                    <h3>{singleProduct.title}</h3>
                    <h3>{singleProduct.brand}</h3>
                </div>
               <div>
                     <h3>Price: Rs{singleProduct.price}</h3>
                     <h3>Rating: {singleProduct.rating}</h3>
               </div>
               <div>

               </div>
            </div> 
        ))}
    </div>
  )
}

export default Products
