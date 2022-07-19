import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <label htmlFor="filter">filter</label>
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
        </select>
      
    </div>
  )
}

export default Sidebar
