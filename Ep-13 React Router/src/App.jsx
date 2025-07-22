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
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  let user = "Godson";

  return (
    <>
      <Router>
        <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to={`/login/${user}`}>Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/product" >Products</Link></li>
        <li><Link to="/todo">ToDo</Link></li>
        </ol>
        <NavBar/>
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
