import './navbar.css'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from  '../assets/logo.jpeg' 
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
export default function NavbarAll(){
    const nav=useNavigate();
    const handleReroute = (e) => {

        e.preventDefault();
        nav(e.target.getAttribute('href'));
    }

    return(
        <Navbar bg="dark" variant='dark' expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className="logo-img"
        alt="logo"
        style={
            {"width":'50px'}
        }
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="/" onClick={handleReroute}>Home</Nav.Link>
          <Nav.Link href="/viewvote" onClick={handleReroute}>View Voter</Nav.Link>
          <Nav.Link href="/castevote" onClick={handleReroute}>Caste Vote</Nav.Link>
            <Nav.Link href="/help" onClick={handleReroute}>Help</Nav.Link>
          </Nav>
          <Button variant="danger" href="/logout" onClick={handleReroute} className='nav-button'>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
