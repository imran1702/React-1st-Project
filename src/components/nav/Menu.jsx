import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/Logo.png";
import "./nav.css";

function Menu() {
  return (
    <Navbar id='nav_head' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#link">Sermon</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
          <button className='ms-auto cn_btn'>Contact us</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu