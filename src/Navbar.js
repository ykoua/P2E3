import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavComponent = () => {
  return (
    <Navbar className='navbar' style={{ backgroundColor: '#1861A5' }} expand="lg">
      <div className="container justify-content-center d-flex align-items-center">

        <a style={{ marginRight: '1rem' }}>
          <img src={require("./images/basket.jpg")} className="img-fluid rounded-start" alt="..." style={{ width: '50px', height: '50px', backgroundColor: '#1861A5' }} />
        </a>

        <Navbar.Brand as={Link} to="/">Los Santos Basketball club</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/coach" active>Coach</Nav.Link>
            <Nav.Link as={Link} to="/club">Club</Nav.Link>
            <NavDropdown as={Link} to="/Services" title="Services" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/Services">tous les services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Booking">reserver un terrain</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Training">session d'entrainement </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Tickett">ticket de tournoi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Tournament">tournoi de basketball</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Location">Location</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavComponent;
