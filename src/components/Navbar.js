import { React } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../img/logo.png';
import { Link } from 'react-scroll';

export default function NavHeader(props) {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
            <Nav.Link>
              <Link to='test1' spy={true} smooth={true} duration={50} className='link'>
                {' '}
                Tutorial
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='test2' spy={true} smooth={true} duration={50} className='link'>
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='test2' spy={true} smooth={true} duration={50} className='link'>
                Links
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
