import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Content from "./Components/Todo";
import Product from "./Components/Product";
import ProductItem from "./Components/ProductItem";
import ProductList from "./Components/ProductList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import NotFound from "./Components/NotFound";
import NewProduct from "./Components/NewProduct";
import UpdateProduct from "./Components/UpdateProduct";
import Wishlist from "./Components/Wishlist";

function App() {
  const [count, setCount] = useState(0);

  let user = "Godson";

  if ( ! localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  // let datafromweb = JSON.parse(localStorage.getItem("cart"))
  // console.log(datafromweb)

  // localStorage.removeItem("cart")

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/:name" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />}>
            <Route index element={<ProductItem />} />
            <Route path="item" element={<ProductItem />} />
            <Route path="list" element={<ProductList />} />
          </Route>
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/todo" element={<Content />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
