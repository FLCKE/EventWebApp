import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import {
  BiBarChart,
  BiCalendarEvent,
  BiGroup,
  BiUser,
  BiLogOut,
} from 'react-icons/bi';
import './index.css';
import logo from '../../assets/logo-2.png'; // Assuming you have a logo image

const NavBarApp = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar bg="dark" expand="lg" className="flex-column p-3 sidebar" style={{ height: '100vh' }}>
      <Container fluid className="flex-column">
        <Navbar.Brand as={Link} to="/" className=" text-white">
          <img src={logo} alt="" className='logo ' />
        </Navbar.Brand>
        <Nav className="flex-column w-100 menu">
          <Nav.Link as={Link} to="/dashboard" className={isActive('/dashboard') ? 'active' : ''}>
            <BiBarChart className="me-2" />
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/events" className={isActive('/events') ? 'active' : ''}>
            <BiCalendarEvent className="me-2" />
            Événements
          </Nav.Link>
          <Nav.Link as={Link} to="/clients" className={isActive('/clients') ? 'active' : ''}>
            <BiGroup className="me-2" />
            Clients
          </Nav.Link>
          <Nav.Link as={Link} to="/profil" className={isActive('/profil') ? 'active' : ''}>
            <BiUser className="me-2" />
            Profil
          </Nav.Link>
        </Nav>
        <Nav className="mt-auto logout">
          <Nav.Link as={Link} to="/login" className={isActive('/login') ? 'active' : ''}>
            <BiLogOut className="me-2" />
            Se déconnecter
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarApp;
