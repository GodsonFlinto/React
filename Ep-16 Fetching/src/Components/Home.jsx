import React from 'react'
import Usefetch from './CustomHook/Usefetch'

const Home = () => {
  let {products} = Usefetch("http://localhost:4000/products")
  return (
    <div>Home - Total = {products.length}</div>
  )
}

export default Home