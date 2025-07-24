import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  let [UpdateProduct, setupdateProduct] = useState( null );

  let {id} = useParams();
  let navigate = useNavigate();
  
  useEffect( ()=>{
    axios.get(`http://localhost:4000/products/${id}`)
    .then( (res)=>{ setupdateProduct(res.data);
    } )
  },[] )

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
      setupdateProduct({
        ...UpdateProduct,
        rating: {
          ...UpdateProduct.rating,
          [fieldname]: value,
        },
      });
    } else {
      setupdateProduct({
        ...UpdateProduct,
        [name]: value,
      });
    }
  }
  //console.log(newProduct)

  function handleAdd(e) {
    e.preventDefault();
    fetch(`http://localhost:4000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdateProduct),
    }).then(() => {
      alert("Item Added Successfully");
      navigate("/product")
    });
  }

  if(UpdateProduct!==null){
    return (
    <Paper elevation={20} style={paperstyle}>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Update Product
      </Typography>
      <Grid2
        component="form"
        style={{ display: "grid", gap: "20px" }}
        onSubmit={handleAdd}
      >
        <TextField
          name="title"
          value={UpdateProduct.title}
          label="Title"
          variant="outlined"
          fullWidth
          onChange={handlechange}
        />
        <TextField
          name="category"
          value={UpdateProduct.category}
          label="Category"
          variant="outlined"
          fullWidth
          onChange={handlechange}
        />
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              name="rating.rate"
              value={UpdateProduct.rating.rate}
              type="number"
              label="Rate"
              variant="outlined"
              onChange={handlechange}
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              name="rating.count"
              value={UpdateProduct.rating.count}
              type="number"
              label="Count"
              variant="outlined"
              onChange={handlechange}
            />
          </Grid2>
        </Grid2>
        <Button type="submit" variant="contained" color="success" fullWidth>
          Save
        </Button>
      </Grid2>
    </Paper>
  );
  }
  else{
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    ) 
  }
  
};

export default UpdateProduct