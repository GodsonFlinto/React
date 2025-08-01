import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IconButton from "@mui/material/IconButton";
import { MdShoppingCart } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";

function NavBar() {
  let name = "Godson";
  //console.log(name)
  let nav = useNavigate()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={`/login/${name}`}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              SignUp
            </Nav.Link>
            <Nav.Link as={Link} to="/product">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/todo">
              ToDo
            </Nav.Link>
          </Nav>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={ ()=>nav("./wishlist") }>
            <MdShoppingCart />
          </IconButton>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
