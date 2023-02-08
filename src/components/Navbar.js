import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FiLogIn, FiMapPin } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { BsHandThumbsUp }from "react-icons/bs";
import { HiOutlineEmojiHappy }from "react-icons/hi";
import {
  AiOutlineHome
} from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const  {loginWithRedirect,logout, user, isLoading} = useAuth0();

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/points"
                onClick={() => updateExpanded(false)}
              >
                <FiMapPin style={{ marginBottom: "2px" }} /> Puntos
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <BsHandThumbsUp
                  style={{ marginBottom: "2px" }}
                />{" "}
                Ventajas
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contribute"
                onClick={() => updateExpanded(false)}
              >
                <HiOutlineEmojiHappy style={{ marginBottom: "2px" }} /> Contribuir
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              {!isLoading && !user &&(
                  <Button
                  onClick={()=> loginWithRedirect()}
                  target="_blank"
                  className="fork-btn-inner"
                  >
                  <FiLogIn style={{ fontSize: "1.2em" }} />{" "}
                  </Button>
              )}
              {!isLoading && user &&(
                  <Button
                  onClick={()=> logout()}
                  target="_blank"
                  className="fork-btn-inner"
                  >
                  <FiLogOut style={{ fontSize: "1.2em" }} />{" "}
                  </Button>
              )}
             
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
