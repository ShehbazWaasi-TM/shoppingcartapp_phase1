import React, { useEffect, useState } from 'react';
import productsdata from "../products.json";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';
import ProductDetailes from "./ProductDetails";

const Products = () => {
    const [store,setStore]       = useState(productsdata.products)
    const [selected,setSelected] = useState(null)
    const allProducts = productsdata.products
    console.log(allProducts)
    if(selected !== null){
      return(
        <ProductDetailes values={selected} />
      )
    } 


  return (
    <div >
      <div>
        <Navbar/>
        <Sidebar store={store} change={setStore} allItems={productsdata.products}/>
      </div>
      <div className='allProducts' >
      {store.map((singleProduct)=>(
            <div className='singleproduct' key={singleProduct.id}>
                <div>
                  <Link to={`/products/${singleProduct.id}`}  >
                   <img src={singleProduct.thumbnail} width="350px" height="250px" alt="product Thumbnail"></img>
                  </Link>
                </div>
                <div>
                    <h3>{singleProduct.title}</h3>
                    <h3>{singleProduct.brand}</h3>
                </div>
               <div>
                     <h3>Price: Rs{singleProduct.price}</h3>
                     <h3>Rating: {singleProduct.rating}</h3>
                     <h3>discount:{singleProduct.discountPercentage}%</h3>
               </div>
               
               <button onClick={()=>setSelected(singleProduct)}  >
                            View Product Details
                </button>
            </div> 
        ))}
      </div>
        
    </div>
  )
}

export default Products
