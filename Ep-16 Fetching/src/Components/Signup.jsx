import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {
  let paperstyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };

  let schema = Yup.object().shape({
    name: Yup.string()
      .required("Name is Required")
      .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter your Fullname"),
    age: Yup.number()
      .integer()
      .positive()
      .required("Age is required")
      .min(18, "Your age need to be 18 to 30")
      .max(30, "Your age need to be 18 to 30"),
    email: Yup.string()
      .email()
      .required("Email is required")
      .matches(/^[a-z]+@[a-z]{3,5}.[a-z]{2,4}$/, "Enter a valid email"),
    password: Yup.string().required("Password is required"),
    cpassword: Yup.string().required("Please confirm your password").oneOf([Yup.ref("password")]),
  });

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  let handledata = (data) => {
    console.log(data);
  };

  return (
    <Paper
      elevation={20}
      style={paperstyle}
      component="form"
      onSubmit={handleSubmit(handledata)}
    >
      <Typography variant="h6" textAlign={"center"}>
        Create New Account
      </Typography>
      <TextField
        label="Name"
        {...register("name")}
        helperText={errors.name?.message}
        error={!!errors.name}
      />
      <TextField
        label="Age"
        {...register("age")}
        helperText={errors.age?.message}
        error={!!errors.age}
      />
      <TextField label="Email" {...register("email")}
      helperText = {errors.email?.message}
      error = {!!errors.email}
      />
      <TextField label="Password" {...register("password")} 
      helperText = {errors.password?.message}
      error = {!!errors.password}
      />
      <TextField label="Confirm Password" {...register("cpassword")} 
      helperText = {errors.cpassword?.message}
      error = {!!errors.cpassword}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Paper>
  );
};

export default Signup;
