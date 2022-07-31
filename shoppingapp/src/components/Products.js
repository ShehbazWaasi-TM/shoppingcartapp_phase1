import React, { useEffect,useState } from 'react';
// import productsdata from "../products.json";
import Sidebar from "../components/Sidebar";
import ProductDetailes from "./ProductDetails";
import { Link } from 'react-router-dom';
import Addtocart from './Addtocart';



const Products = ({onAdd,cartItems}) => {


    // const allProducts = productsdata.products
    // console.log(allProducts)
    const [allData, setAllData] = useState()
    const [store,setStore]       = useState()
    const [selected,setSelected] = useState(null)
    const [countItems, setCountItems] = useState(0)
    const [addItem, setAddItem]       = useState()
    console.log("additem" ,addItem)

    const data = "shehbaz waasi"

    const inCart = []
    console.log("inCart", inCart)

    useEffect (()=>{
      const all =  async() =>{
        const getall = await fetch("https://dummyjson.com/products",{
          method:"GET"
        })
        console.log("getall" , getall)
        const res = await getall.json()
        console.log("res", res)
        console.log(res.products)
        setStore(res.products)
        setAllData(res.products)
      }
      all()
    },[])

    if(selected !== null){
      return(
        <>
          <ProductDetailes values={selected} />
        </>
      )
      }

      

    let sidebar
    if (store!==undefined){
      sidebar = <Sidebar store={store} change={setStore} allItems={allData}/>
    }
  return (
    <div >
      <div>
        {/* <Navbar/> */}
        <Link to="/CartPage"><Addtocart count={countItems} onAdd={onAdd} cartItems={cartItems} /></Link>
        {sidebar}
      </div>
      <div className='allProducts' >
      {store && store.map((singleProduct)=>(
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

               {/* <ProductContext.Provider value={singleProduct}>
                          {Children}
               </ProductContext.Provider> */}

               <button onClick={()=>setSelected(singleProduct)}>
                                      View Product Details
                </button>

                <div>
                  <button className='cart-btn' onClick={(e)=>{
                            e.preventDefault()
                            setCountItems(countItems+1)
                            onAdd(singleProduct)}}>Add to Cart</button>
                </div>
            </div> 
        ))}
      </div>
        
    </div>
  )
}

export default Products;
// export {ProductContext};
