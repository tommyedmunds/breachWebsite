import { React } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function NavHeader(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToBottom = () => {
    window.scrollBy(0, 199);
  };

  return (
    <Navbar bg='light' expand='lg' sticky='top' className='navbar'>
      <Container className='navbarContainer'>
        <Navbar.Brand onClick={() => scrollToTop()}>
          <img
            src={logo}
            width='70'
            height='35'
            className='d-inline-block align-top'
            alt='breach logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link>Tutorial</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Links</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
