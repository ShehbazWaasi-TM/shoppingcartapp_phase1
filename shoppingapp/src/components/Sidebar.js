import React, { useState } from 'react'

const Sidebar = ({store, change , allItems}) => {
    console.log('store', store)
    const [orginalData, setOriginaldata] = useState(store)
    console.log("orginaldata", orginalData)
    const [newstore, setNewStore] = useState(store)
    console.log("newstore", store)


    //sorting d data
    const sortbyprice = () =>{
        const sortProduct = [...store].sort((a,b)=> a.price > b.price ? 1 :-1)
        console.log("store in price", store)
        setNewStore(sortProduct)
        change(newstore) 
    }

    const sortbyrating = () =>{
        const sortrating = [...store].sort((a,b)=> a.rating > b.rating ? 1 :-1)
        setNewStore(sortrating) 
        change(newstore) 
    }
    const sortbyDiscountPercentage = () =>{
        const sortDiscountPercentage = [...store].sort((a,b)=> a.discountPercentage > b.discountPercentage ? 1 :-1)
        setNewStore(sortDiscountPercentage)
        console.log("newsortstore", newstore)  
        change(newstore) 
    }

    //filtering d data
    const filterbySmartphones = (catItem) =>{
        const results = [...store].filter((oneproduct)=>{
            return oneproduct.category===catItem
        });
        console.log("results" , results)
        setNewStore(results)
        change(newstore)
    }
    const filterbylaptops = (catItem) =>{
        const results = [...store].filter((oneproduct)=>{
            return oneproduct.category===catItem
        });
        console.log("results" , results)
        setNewStore(results)
        change(newstore)
    }
    const filterbyfragrance = (catItem) =>{
        const results = [...store].filter((oneproduct)=>{
            return oneproduct.category===catItem
        });
        console.log("results" , results)
        setNewStore(results)
        change(newstore)
    }
    const filterbyallitems = () =>{
        change(orginalData)
    }

  return (
    <div className='sidebar'>
        <button onClick={filterbyallitems}>allProducts</button>
        <button onClick={()=>filterbySmartphones("smartphones")}>smartphones</button>
        <button onClick={()=>filterbylaptops("laptops")}>laptops</button>
        <button onClick={()=>filterbyfragrance("fragrances")}>fragrances</button>
        <button onClick={sortbyprice}>sort on price</button>
        <button onClick={sortbyrating}>sort on rating</button>
        <button onClick={sortbyDiscountPercentage}>sort on discountPercentage</button>
      
    </div>
  )
}

export default Sidebar
