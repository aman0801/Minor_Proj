import './navbar.css'
import {useLogout} from '../hooks/useLogout'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from  '../assets/logo.jpeg' 
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useAuthContext } from '../hooks/useAuthContext';
export default function NavbarAll(){
    const {logout,isPending,error} = useLogout();
    const {user} = useAuthContext();
    const nav=useNavigate();
    const handleReroute = (e) => {
        e.preventDefault();
        nav(e.target.getAttribute('href'));
    }
    return(
        <Navbar bg="dark" variant='dark' expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href='/'><img src={logo} className="logo-img"
        alt="logo"
        style={
            {"width":'50px'}
        }
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          {user&&
          <Nav.Link href="/" onClick={handleReroute}>Home</Nav.Link>}
          {user&&
          <Nav.Link href="/viewvote" onClick={handleReroute}>View Vote</Nav.Link>}
          {user&&
          <Nav.Link href="/castevote" onClick={handleReroute}>Caste Vote</Nav.Link>}
          {user&&
          <Nav.Link href="/help" onClick={handleReroute}>Help</Nav.Link>}
          {!user&&
          <Nav.Link href="/signup" onClick={handleReroute}>SignUp</Nav.Link>}
          {!user&&
          <Nav.Link href="/login" onClick={handleReroute}>login</Nav.Link>}
          </Nav>
          {user&&!isPending&&<Button variant="danger"onClick={logout} className='nav-button'>Logout</Button>}
          {user&&isPending&&<Button variant="danger"onClick={logout} className='nav-button' disabled>Logging out</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}
