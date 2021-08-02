import { React } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export default function NavHeader(props) {
  return (
    <Navbar bg='light' expand='lg' sticky='top' className='navbar'>
      <Container className='navbarContainer'>
        <Navbar.Brand href='#home'>Breach</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
