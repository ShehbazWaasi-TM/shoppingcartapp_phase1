import React, { useState } from 'react'

const Sidebar = ({store, change}) => {
    console.log('store', store)
    const [newstore, setNewStore] = useState(store)
    const sortbyprice = () =>{
        const sortProduct = [...store].sort((a,b)=> a.price > b.price ? 1 :-1)
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

  return (
    <div className='sidebar'>
        {/* <label htmlFor="filter">filter</label>
        <select name="filter" id="">
            <option value="brand">
                <label htmlFor="brand">brand</label>
                <select name="brand" id="">
                    <option value="iphone">iphone</option>
                    <option value="iphone">iphone</option>
                </select>
            </option>
            <option value="category">
                category
            </option>
            <option value="title">
               title
            </option>
            <option value="stock">
               stock
            </option>
        </select> */}

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
