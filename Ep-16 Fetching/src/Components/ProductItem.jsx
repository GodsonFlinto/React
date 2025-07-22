import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductItem = () => {
  let [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products", { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <section className="products">
        {products.map((product) => {
          return (
            <Card style={{ width: "18rem" }} className="product">
              <center>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "9rem", height: "12rem" }}
                />
              </center>
              <Card.Body>
                <Card.Title className="titlq">{product.title}</Card.Title>
                <Card.Title className="title">Rs.{product.price}</Card.Title>
                <Card.Text style={{ overflow: "scroll", height: "200px" }}>
                  {product.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{justifyContent:"center", alignItems : "center"}}>
                <Button variant="primary" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Add to Cart</Button>
              </Card.Footer>
            </Card>
          );
        })}
      </section>
    </div>
  );
};

export default ProductItem;
