import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Product = () => {
  let [count, setCount] = useState(0)

  useEffect( ()=>{
    console.log("This will run after every renders")
  } )

  useEffect( ()=>{
    console.log("This will run only one time during initial render")
  }, [] )

  useEffect( ()=>{
    console.log("This will run when the dependency changes i.e when the state that we passed inside the array parameter changes")
  }, [count] )

  console.log("Initial Render")

  return (
    <div>
      <h1>Products - {count}</h1>
      <Button variant="danger" onClick={()=>{setCount(count+1)}}>Shop</Button>
      <Link to="item">Product Item</Link>
      <Link to="list">Product List</Link>
      <Outlet />
    </div>
  );
};

export default Product;
