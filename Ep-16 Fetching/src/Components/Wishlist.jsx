import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBinFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { removeItem } from '../store/cartslice';

const Wishlist = () => {
  let cartProducts = useSelector( (state)=>{return state.cart} )
  //console.log(cartProducts)

  let dispatch = useDispatch()
  let handledelete = (id) =>{
    dispatch(removeItem(id))
  }
  return (
    <div>
        <h1>WishList</h1>
        {cartProducts.length !== 0 ? (
          <section className="products">
            {cartProducts.map((product) => {
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
        ) :
        <h1>Add some products to cart</h1>
      }
      </div>
  )
}

export default Wishlist