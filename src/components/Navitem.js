import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav} from 'react-bootstrap';
function Navitem() {
  return ( 
    <Navbar bg="dark" variant="dark" sticky='top' expand='lg' className='navbar-header'>
      <Navbar.Brand />
      <Navbar.Toggle/>
      <Navbar.Collapse>
      <Nav className='nav-items--'>
        <Nav.Link href='#Home'><h4 className='nav-link'>HOME</h4></Nav.Link>
        <Nav.Link href='#About'><h4 className='nav-link'>ABOUT</h4></Nav.Link>
        <Nav.Link href='#Project'><h4 className='nav-link'>PROJECT</h4></Nav.Link>
        <Nav.Link href='#Contact'><h4 className='nav-link'>CONTACT</h4></Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
   );
}

export default Navitem;