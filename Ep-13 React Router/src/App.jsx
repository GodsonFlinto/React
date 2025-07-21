import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Content from "./Components/Todo";
import Product from "./Components/Product";
import ProductItem from "./Components/ProductItem";
import ProductList from "./Components/ProductList";

function App() {
  const [count, setCount] = useState(0);

  let user = "Godson";

  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to={`/login/${user}`}>Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/product" >Products</Link>
        <Link to="/todo">ToDo</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:name" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product/>}>
            <Route index element={<ProductItem/>}/>
            <Route path="item" element={<ProductItem/>}/>
            <Route path="list" element={<ProductList/>} />
          </Route>
          <Route path="/todo" element={<Content/> }/>
        </Routes>

      </Router>
    </>
  );
}

export default App;
