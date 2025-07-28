import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FourSquare } from "react-loading-indicators";
import Usefetch from "./CustomHook/Usefetch";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartslice";

const ProductItem = () => {
  let navigate = useNavigate();
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
  let { products, Error, loading, setProduct } = Usefetch("http://localhost:4000/products");
  //console.log(customhook)

  let handledelete = (id) => {
      axios.delete(`http://localhost:4000/products/${id}`)
      .then(() => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });

        let newProduct = products.filter( (product)=>{return product.id !== id } )
        setProduct(newProduct)
    });
  };


  let dispatch = useDispatch()
  let cartState = useSelector( (state) =>{return state.cart})
  let addItemtoCart = (product)=>{
    let checkProduct = cartState.some( (cartProduct)=>cartProduct.id === product.id )
    if( ! checkProduct){
      dispatch(addItem(product))
      Swal.fire({
              title: "Success!",
              text: "Your product has been added.",
              icon: "success",
            });
    }
    else{
      Swal.fire({
              title: "Oops!",
              text: "Your product is already in the list.",
              icon: "error",
              footer : "Please choose another product"
            });
    }
    
  }

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
        <article>
          <span>
            <h2>To create new product </h2>
            <button onClick={()=>navigate("/newProduct")}>Click me</button>
          </span>
      </article>
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
                    <div className="button">
                      <Button
                        variant="primary"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={ () => addItemtoCart(product) }
                      >
                        <FaShoppingCart />
                      </Button>
                      <Button
                        onClick={() => {
                          navigate(`/update/${product.id}`);
                        }}
                        variant="secondary"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <MdEditSquare />
                      </Button>
                      <Button
                        onClick={() => {
                          handledelete(product.id);
                        }}
                        variant="danger"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <RiDeleteBinFill />
                      </Button>
                    </div>
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
