import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Product = () => {
  
  return (
    <div>
      <h1>Products</h1>
      <Outlet />
    </div>
  );
};

export default Product;
