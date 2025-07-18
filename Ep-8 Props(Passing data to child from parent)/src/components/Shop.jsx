import { useState } from "react";
import Product from "./Product";

const Shop = () => {
  const [product, SetProduct] = useState({
    name: "Iphone",
    price: 10000,
    desc: "8gb ram with 128gb storage",
  });
  return (
    <>
      <div>
        <h1>Welcome to our Shop!</h1>
        <Product product = {product}/>
      </div>
    </>
  );
};
export default Shop;
