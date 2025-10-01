import React from "react";
import {Container,NavDropdown,Navbar,Nav,Collapse} from 'react-bootstrap';
import './Nav.css';
import logo from '../../assets/images/health.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCoffee, faPhone, faSearch, faSquare} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={logo} alt="logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/home" className="active">
              Home
            </Nav.Link>

            <NavDropdown title="Pages" id="pages-dropdown">
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">FAQ's</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking">Booking</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/404">Error 404</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">Login / Register</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/services">Service</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/service-details">Service Details</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="blog-dropdown">
              <NavDropdown.Item as={Link} to="/blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog-details">Blog Details</NavDropdown.Item>
            </NavDropdown>

            {/* Contact Link */}
            <Nav.Link as={Link} to="/contact">
              <FontAwesomeIcon icon={faArrowLeft} /> Contact Us
            </Nav.Link>

            <Nav.Link>
              <FontAwesomeIcon icon={faSearch} />
            </Nav.Link>

            <Nav.Link>
              <FontAwesomeIcon icon={faPhone} /> (+01) 999 888 777
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;