import React from 'react'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Currentissue from './subcomponent/currentissue';
import Electionstory from './subcomponent/electionstory';
import Importantissue from './subcomponent/importantissue';
import Pressrelease from './subcomponent/pressrelease';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
const NavBar = () => {
    const [currentcomp, setCurrentcomp] = useState("Current Issues")
    const [active, setActive] = useState("Current Issues")
    const handleClick = (e) => {
        setCurrentcomp(e.target.innerHTML)
        setActive(e.target.innerHTML)
    }
    return (
        <div className='home-navbar'>
            <div className='issues'>
                <br />
                <Navbar bg="primary" variant="dark">
                    <Container >
                        <Nav className="me-auto">
                            <Nav.Link onClick={handleClick} active={active === 'Current Issues'}>Current Issues</Nav.Link>
                            <Nav.Link onClick={handleClick} active={active === 'Press Release'} >Press Release</Nav.Link>
                            <Nav.Link onClick={handleClick} active={active === 'Important Instructions'}>Important Instructions</Nav.Link>
                            <Nav.Link onClick={handleClick} active={active === 'Election Stories'}>Election Stories</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                {currentcomp === "Current Issues" && <Currentissue />}
                {currentcomp === "Press Release" && <Pressrelease />}
                {currentcomp === "Important Instructions" && <Importantissue />}
                {currentcomp === "Election Stories" && <Electionstory />}
                <br />
            </div>
            <div className='maps'>
                <div style={{'width':'25vw'}}>
                    <img
                        className="d-block"
                        style={{'width':'25vw'}}
                        src="https://eci.gov.in/img/link-ceo-map.jpg"
                    />
                </div>
                <div style={{'width':'25vw'}}>
                    <h5>Link to Official Sites of Chief Electoral Officers of all States/UT</h5>
                    <p>Chief Electoral Officers of all states /UT's have developed their websites which include Statistics and information of local Interest. Latest electoral rolls with search facility are also available on these sites.</p>
                
                <Dropdown>
                    <Dropdown.Toggle variant="success">
                        Please select an State/UT
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">
                            Uttar Pradesh
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Bihar
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                            Odisha
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default NavBar