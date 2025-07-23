import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {FourSquare} from "react-loading-indicators"
import Usefetch from "./CustomHook/Usefetch";

const ProductItem = () => {
  // let [products, setProduct] = useState([]);
  // let [Error, setError] = useState("");
  // let [loading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:4000/products", { method: "GET" })
  //     .then((response) => {
  //       console.log(response.ok);
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Search proper element");
  //       }
  //     })
  //     .then((data) => {
  //       setProduct(data);
  //     })
  //     .catch((error) => {
  //       //console.log(error.message)
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);
  let {products, Error, loading} = Usefetch("http://localhost:4000/products")
  //console.log(customhook)

  if (loading) {
    return (
      <center>
        <div>
        <FourSquare
          color="#ff081a"
          size="medium"
          text="Loading..."
          textColor=""
        />{" "}
      </div>
      </center>
      
    );
  } else {
    return (
      <div>
        <h1>Product List</h1>
        {Error && <h2>{Error}</h2>}
        {products.length !== 0 && (
          <section className="products">
            {products.map((product) => {
              return (
                <Card
                  key={product.id}
                  style={{ width: "18rem" }}
                  className="product"
                >
                  <center>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      style={{ width: "9rem", height: "12rem" }}
                    />
                  </center>
                  <Card.Body>
                    <Card.Title className="title">{product.title}</Card.Title>
                    <Card.Title className="title">
                      Rs.{product.price}
                    </Card.Title>
                    <Card.Text style={{ overflow: "scroll", height: "200px" }}>
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Button
                      variant="primary"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Footer>
                </Card>
              );
            })}
          </section>
        )}
      </div>
    );
  }
};

export default ProductItem;
