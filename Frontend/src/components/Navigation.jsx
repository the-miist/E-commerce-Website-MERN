import React from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { CartPlus, Person } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          ITV Mart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            {
              localStorage.getItem("role")=="ADMIN" ?
              <Nav.Link as={Link} to="/addproduct">
                Add Product
              </Nav.Link> : null
            }

            {localStorage.getItem("token") ? (
              <Nav.Link
                as={Link}
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "http://localhost:5173/products";
                }}
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
          <div className="d-flex">
            <CartPlus as={Button} color="white" size="40" />
          </div>
          <Badge pill bg="warning">
            1
          </Badge>

          {localStorage.getItem("token") && localStorage.getItem("id") ? (
            <>
              <div className="d-flex" style={{ marginLeft: "20px" }}>
                <Person as={Button} color="white" size="40" />
              </div>

              <div className="d-flex">
                <p style={{ color: "white", marginTop:"15px"}}>
                  {localStorage.getItem("username")}
                </p>
              </div>
            </>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
