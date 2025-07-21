import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        Product
        <Link to="item">Product Item</Link>
        <Link to="list">Product List</Link>
        <Outlet/>
    </div>
  )
}

export default Product