import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Grid";
import Button from "@mui/material/Button";

const NewProduct = () => {
  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 100,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let paperstyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  function handlechange(e) {
    //console.log(e.target.value)
    //console.log(e.target.name)
    let { name, value } = e.target;
    let fieldname = name.split("rating.")[1];
    //console.log(fieldname)

    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldname]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  }
  //console.log(newProduct)

  function handleAdd(e) {
    e.preventDefault();
    fetch("http://localhost:4000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => {
      alert("Item Added Successfully");
      setNewProduct({
        title: "",
        price: 100,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    });
  }

  return (
    <Paper elevation={20} style={paperstyle}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Create New Product
      </Typography>
      <Grid2
        component="form"
        style={{ display: "grid", gap: "20px" }}
        onSubmit={handleAdd}
      >
        <TextField
          name="title"
          value={newProduct.title}
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handlechange}
        />
        <TextField
          name="category"
          value={newProduct.category}
          label="Category"
          variant="outlined"
          fullWidth
          onChange={handlechange}
        />
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              name="rating.rate"
              value={newProduct.rating.rate}
              type="number"
              label="Rate"
              variant="outlined"
              onChange={handlechange}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              name="rating.count"
              value={newProduct.rating.count}
              type="number"
              label="Count"
              variant="outlined"
              onChange={handlechange}
            />
          </Grid2>
        </Grid2>
        <Button type="submit" variant="contained" fullWidth>
          Add
        </Button>
      </Grid2>
    </Paper>
  );
};

export default NewProduct;
